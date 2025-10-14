"use client";

import { Card, Input, Button, Typography, Table, Select, Tag } from "antd";
import { ScanOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Title, Text } = Typography;
const { TextArea } = Input;

export default function ShippingPage() {
  const [selectedDefects, setSelectedDefects] = useState<string[]>([]);

  const recentShipments = [
    {
      key: "1",
      shipmentId: "SHP-001-24",
      destination: "New York Store",
      carrier: "UPS",
      status: "shipped",
      date: "2024-07-29",
    },
    {
      key: "2",
      shipmentId: "SHP-002-24",
      destination: "Los Angeles DC",
      carrier: "FedEx",
      status: "in-transit",
      date: "2024-07-28",
    },
    {
      key: "3",
      shipmentId: "SHP-003-24",
      destination: "Dallas Boutique",
      carrier: "DHL",
      status: "delivered",
      date: "2024-07-27",
    },
    {
      key: "4",
      shipmentId: "SHP-004-24",
      destination: "Miami Warehouse",
      carrier: "UPS",
      status: "processing",
      date: "2024-07-27",
    },
    {
      key: "5",
      shipmentId: "SHP-005-24",
      destination: "Chicago Showroom",
      carrier: "FedEx",
      status: "shipped",
      date: "2024-07-26",
    },
  ];

  const returnsLog = [
    {
      key: "1",
      rmaId: "RMA-001-24",
      item: "Blue Denim Jeans, Size 32",
      condition: "good",
      disposition: "restocked",
      date: "2024-07-29",
    },
    {
      key: "2",
      rmaId: "RMA-002-24",
      item: "Red Cotton T-Shirt, Large",
      condition: "damaged",
      disposition: "scrapped",
      date: "2024-07-28",
    },
    {
      key: "3",
      rmaId: "RMA-003-24",
      item: "Leather Jacket, Black, M",
      condition: "good",
      disposition: "restocked",
      date: "2024-07-27",
    },
    {
      key: "4",
      rmaId: "RMA-004-24",
      item: "Striped Scarf, Grey",
      condition: "minor-defect",
      disposition: "repaired",
      date: "2024-07-26",
    },
    {
      key: "5",
      rmaId: "RMA-005-24",
      item: "Wool Sweater, Beige, S",
      condition: "damaged",
      disposition: "scrapped",
      date: "2024-07-26",
    },
  ];

  const shipmentColumns = [
    {
      title: "Shipment ID",
      dataIndex: "shipmentId",
      key: "shipmentId",
    },
    {
      title: "Destination",
      dataIndex: "destination",
      key: "destination",
    },
    {
      title: "Carrier",
      dataIndex: "carrier",
      key: "carrier",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        const statusConfig: Record<string, { color: string; label: string }> = {
          shipped: { color: "green", label: "Shipped" },
          "in-transit": { color: "orange", label: "In Transit" },
          delivered: { color: "blue", label: "Delivered" },
          processing: { color: "gold", label: "Processing" },
        };
        const config = statusConfig[status] || {
          color: "default",
          label: status,
        };
        return <Tag color={config.color}>{config.label}</Tag>;
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  const returnsColumns = [
    {
      title: "RMA ID",
      dataIndex: "rmaId",
      key: "rmaId",
    },
    {
      title: "Item",
      dataIndex: "item",
      key: "item",
    },
    {
      title: "Condition",
      dataIndex: "condition",
      key: "condition",
      render: (condition: string) => {
        const conditionConfig: Record<
          string,
          { color: string; label: string }
        > = {
          good: { color: "green", label: "Good" },
          damaged: { color: "red", label: "Damaged" },
          "minor-defect": { color: "orange", label: "Minor Defect" },
        };
        const config = conditionConfig[condition] || {
          color: "default",
          label: condition,
        };
        return <Tag color={config.color}>{config.label}</Tag>;
      },
    },
    {
      title: "Disposition",
      dataIndex: "disposition",
      key: "disposition",
      render: (disposition: string) => {
        const dispositionConfig: Record<
          string,
          { color: string; label: string }
        > = {
          restocked: { color: "green", label: "Restocked" },
          scrapped: { color: "red", label: "Scrapped" },
          repaired: { color: "orange", label: "Repaired/Restocked" },
        };
        const config = dispositionConfig[disposition] || {
          color: "default",
          label: disposition,
        };
        return <Tag color={config.color}>{config.label}</Tag>;
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  const handleDefectChange = (defect: string) => {
    setSelectedDefects((prev) =>
      prev.includes(defect)
        ? prev.filter((d) => d !== defect)
        : [...prev, defect]
    );
  };

  return (
    <div className="p-6">
      <Title level={2} className="!mb-6">
        Shipping & Returns Management
      </Title>

      {/* Outbound Shipments */}
      <div className="mb-8">
        <Title level={3} className="!mb-4">
          Outbound Shipments
        </Title>

        <Card className="mb-4">
          <Title level={5} className="!mb-4">
            Generate Shipment Manifest
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <Text className="block mb-2">Shipment ID</Text>
              <Input placeholder="e.g., ORD-789012" size="large" />
            </div>
            <div>
              <Text className="block mb-2">Destination</Text>
              <Input placeholder="e.g., Main Street Store" size="large" />
            </div>
            <div>
              <Text className="block mb-2">Carrier</Text>
              <Select
                placeholder="Select carrier"
                size="large"
                className="w-full"
              >
                <Select.Option value="ups">UPS</Select.Option>
                <Select.Option value="fedex">FedEx</Select.Option>
                <Select.Option value="dhl">DHL</Select.Option>
                <Select.Option value="usps">USPS</Select.Option>
              </Select>
            </div>
          </div>
          <Button type="primary" size="large">
            Generate Manifest
          </Button>
        </Card>

        <Card>
          <Title level={5} className="!mb-4">
            Recent Shipments
          </Title>
          <Table
            columns={shipmentColumns}
            dataSource={recentShipments}
            pagination={false}
          />
        </Card>
      </div>

      {/* Inbound Returns */}
      <div className="mb-8">
        <Title level={3} className="!mb-4">
          Inbound Returns
        </Title>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* RMA Barcode Scan */}
          <Card>
            <Title level={5} className="!mb-4">
              RMA Barcode Scan
            </Title>
            <div className="flex flex-col items-center justify-center py-8 mb-4">
              <div className="text-6xl text-blue-600 mb-4">
                <ScanOutlined />
              </div>
              <Text className="text-gray-500">Scan RMA Barcode...</Text>
            </div>
            <Button type="primary" size="large" className="w-full">
              Look Up Return
            </Button>
          </Card>

          {/* Return Item Details */}
          <Card>
            <Title level={5} className="!mb-4">
              Return Item Details
            </Title>
            <div className="space-y-3">
              <div className="flex justify-between">
                <Text className="text-gray-600">RMA ID:</Text>
                <Text strong>RMA-001-24</Text>
              </div>
              <div className="flex justify-between">
                <Text className="text-gray-600">Item ID:</Text>
                <Text strong>ITEM-456789</Text>
              </div>
              <div className="flex justify-between">
                <Text className="text-gray-600">Product Name:</Text>
                <Text strong>Blue Denim Jeans, Size 32</Text>
              </div>
              <div className="flex justify-between">
                <Text className="text-gray-600">Reason for Return:</Text>
                <Text strong>Incorrect size ordered</Text>
              </div>
              <div className="flex justify-between">
                <Text className="text-gray-600">Original Order ID:</Text>
                <Text strong>ORD-789012</Text>
              </div>
              <div className="flex justify-center pt-4">
                <div className="w-24 h-24 bg-gray-100 rounded flex items-center justify-center">
                  <img
                    src="/blue-denim-jeans.png"
                    alt="Product"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Re-inspection Form */}
        <Card className="mb-6">
          <Title level={5} className="!mb-4">
            Re-inspection Form
          </Title>
          <div className="mb-4">
            <Text className="block mb-2">Inspection Comments</Text>
            <TextArea
              rows={4}
              placeholder="Enter detailed inspection notes..."
            />
          </div>
          <div className="mb-4">
            <Text className="block mb-2 font-medium">Defect Types:</Text>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Stained", "Damaged Packaging", "Torn", "Other"].map(
                (defect) => (
                  <label
                    key={defect}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedDefects.includes(defect)}
                      onChange={() => handleDefectChange(defect)}
                      className="w-4 h-4"
                    />
                    <Text>{defect}</Text>
                  </label>
                )
              )}
            </div>
          </div>
          <Button type="primary" size="large">
            Complete Inspection
          </Button>
        </Card>

        {/* Item Disposition */}
        <Card className="mb-6">
          <Title level={5} className="!mb-4">
            Item Disposition
          </Title>
          <div className="flex gap-4">
            <Button type="primary" size="large" className="flex-1">
              Restock Item
            </Button>
            <Button danger size="large" className="flex-1">
              Scrap Item
            </Button>
          </div>
        </Card>

        {/* Returns Log */}
        <Card>
          <Title level={5} className="!mb-4">
            Returns Log
          </Title>
          <Table
            columns={returnsColumns}
            dataSource={returnsLog}
            pagination={false}
          />
        </Card>
      </div>
    </div>
  );
}
