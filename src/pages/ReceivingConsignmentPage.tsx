"use client";

import { useState } from "react";
import {
  Card,
  Typography,
  Input,
  Select,
  DatePicker,
  Button,
  Table,
  InputNumber,
  Space,
} from "antd";
import {
  BarcodeOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ScanOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

interface ConsignmentItem {
  key: string;
  itemCode: string;
  description: string;
  expectedQty: number;
  receivedQty: number;
  unit: string;
}

export default function ReceivingConsignmentPage() {
  const [items] = useState<ConsignmentItem[]>([
    {
      key: "1",
      itemCode: "FB-DR1001",
      description: "Denim Fabric - Dark Blue",
      expectedQty: 500,
      receivedQty: 500,
      unit: "Meters",
    },
    {
      key: "2",
      itemCode: "FB-COT2005",
      description: "Cotton Twill - Grey",
      expectedQty: 300,
      receivedQty: 280,
      unit: "Meters",
    },
    {
      key: "3",
      itemCode: "BTN-PL12",
      description: "Pearl Buttons - White (12mm)",
      expectedQty: 1000,
      receivedQty: 1000,
      unit: "Units",
    },
    {
      key: "4",
      itemCode: "ZIP-NY30",
      description: "Nylon Zipper - Black (30cm)",
      expectedQty: 200,
      receivedQty: 200,
      unit: "Units",
    },
    {
      key: "5",
      itemCode: "FB-KNIT50",
      description: "Knitted Fabric - Red",
      expectedQty: 400,
      receivedQty: 400,
      unit: "Meters",
    },
  ]);

  const columns = [
    {
      title: "Item Code",
      dataIndex: "itemCode",
      key: "itemCode",
      width: 150,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 250,
    },
    {
      title: "Expected Qty",
      dataIndex: "expectedQty",
      key: "expectedQty",
      width: 130,
      align: "center" as const,
    },
    {
      title: "Received Qty",
      dataIndex: "receivedQty",
      key: "receivedQty",
      width: 130,
      align: "center" as const,
    },
    {
      title: "Unit of Measure",
      dataIndex: "unit",
      key: "unit",
      width: 150,
    },
    {
      title: "Actions",
      key: "actions",
      width: 100,
      align: "center" as const,
      render: () => (
        <Space size="small">
          <Button type="text" icon={<EditOutlined />} size="small" />
          <Button type="text" danger icon={<DeleteOutlined />} size="small" />
        </Space>
      ),
    },
  ];

  const totalUniqueItems = items.length;
  const totalQuantityReceived = items.reduce(
    (sum, item) => sum + item.receivedQty,
    0
  );

  return (
    <div className="mx-auto p-5">
      {/* Header */}
      <Title level={2} className="!mb-5">
        Receiving Consignment
      </Title>

      {/* Consignment Details Section */}
      <Card
        style={{
          marginBottom: "24px",
        }}
        className="shadow-sm !mb-6"
      >
        <Title level={4} className="!mb-2">
          Consignment Details
        </Title>
        <Text className="text-gray-600 block mb-6">
          Enter details for the incoming consignment and verify the Purchase
          Order.
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <Text className="block mb-2 font-medium">
              Purchase Order Number
            </Text>
            <Input
              placeholder="e.g., PO-2024-001"
              size="large"
              className="bg-gray-100"
            />
          </div>
          <div>
            <Text className="block mb-2 font-medium">Supplier</Text>
            <Select
              placeholder="Select supplier"
              size="large"
              className="w-full"
              options={[
                { value: "supplier1", label: "Supplier 1" },
                { value: "supplier2", label: "Supplier 2" },
              ]}
            />
          </div>
          <div>
            <Text className="block mb-2 font-medium">
              Expected Delivery Date
            </Text>
            <DatePicker size="large" className="w-full bg-gray-100" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Text className="block mb-2 font-medium">Packing List ID</Text>
            <Input
              placeholder="e.g., PL-FX-3456"
              size="large"
              className="bg-gray-100"
            />
          </div>
          <div className="md:col-span-2 flex items-end">
            <Button
              type="link"
              className="text-blue-600 p-0 h-auto font-medium"
            >
              Verify Purchase Order
            </Button>
          </div>
        </div>
      </Card>

      {/* Item Entry & Barcode Handling Section */}
      <Card className="shadow-sm !mb-6">
        <Title level={4} className="!mb-2">
          Item Entry & Barcode Handling
        </Title>
        <Text className="text-gray-600 block mb-6">
          Add individual items manually or by scanning barcodes.
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
          <div className="md:col-span-4">
            <Text className="block mb-2 font-medium">Item Code</Text>
            <div className="flex gap-2">
              <Select
                placeholder="Select existing item"
                size="large"
                className="flex-1"
                options={[
                  { value: "item1", label: "Item 1" },
                  { value: "item2", label: "Item 2" },
                ]}
              />
              <Button size="large" icon={<PlusOutlined />}>
                New
              </Button>
            </div>
          </div>
          <div className="md:col-span-2">
            <Text className="block mb-2 font-medium">Quantity</Text>
            <InputNumber
              placeholder="0"
              size="large"
              className="w-full bg-gray-100"
              min={0}
              defaultValue={0}
            />
          </div>
          <div className="md:col-span-3">
            <Text className="block mb-2 font-medium">Unit of Measure</Text>
            <Select
              placeholder="Select unit"
              size="large"
              className="w-full"
              options={[
                { value: "meters", label: "Meters" },
                { value: "units", label: "Units" },
                { value: "kg", label: "Kilograms" },
              ]}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
          <div className="md:col-span-3">
            <Text className="block mb-2 font-medium">Color</Text>
            <Input
              placeholder="e.g., Navy Blue"
              size="large"
              className="bg-gray-100"
            />
          </div>
          <div className="md:col-span-3">
            <Text className="block mb-2 font-medium">Size</Text>
            <Input
              placeholder="e.g., L / One Size"
              size="large"
              className="bg-gray-100"
            />
          </div>
          <div className="md:col-span-6">
            <Text className="block mb-2 font-medium">Scan Barcode</Text>
            <Input
              placeholder="Scan item barcode"
              size="large"
              className="bg-gray-100"
              prefix={<ScanOutlined className="text-gray-400" />}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <Button size="large" icon={<BarcodeOutlined />}>
            Generate Barcode
          </Button>
          <Button type="default" size="large" icon={<PlusOutlined />}>
            Add Item
          </Button>
        </div>
      </Card>

      {/* Current Consignment Items Section */}
      <Card className="shadow-sm !mb-6">
        <Title level={4} className="!mb-2">
          Current Consignment Items
        </Title>
        <Text className="text-gray-600 block mb-6">
          Review and manage items before creating the Goods Receipt Note.
        </Text>

        <Table
          columns={columns}
          dataSource={items}
          pagination={false}
          bordered
          className="mb-0"
          scroll={{ x: 800 }}
        />
      </Card>

      {/* Consignment Summary & GRN Creation Section */}
      <Card className="shadow-sm !mb-6">
        <Title level={4} className="!mb-6">
          Consignment Summary & GRN Creation
        </Title>

        <div className="mb-6">
          <Text className="block mb-2">
            <span className="font-medium">Total Unique Items:</span>{" "}
            {totalUniqueItems}
          </Text>
          <Text className="block">
            <span className="font-medium">Total Quantity Received:</span>{" "}
            {totalQuantityReceived}
          </Text>
        </div>

        <div className="flex gap-4">
          <Button type="primary" size="large" icon={<CheckCircleOutlined />}>
            Create Goods Receipt Note
          </Button>
          <Button size="large" icon={<CloseCircleOutlined />}>
            Cancel
          </Button>
        </div>
      </Card>
    </div>
  );
}
