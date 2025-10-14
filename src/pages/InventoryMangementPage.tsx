"use client";

import {
  Card,
  Input,
  Table,
  Tag,
  Button,
  Form,
  Progress,
  Typography,
  Space,
} from "antd";
import {
  AppstoreOutlined,
  InboxOutlined,
  WarningOutlined,
  CloseCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Title, Text } = Typography;

export default function InventoryManagementPage() {
  const stockData = [
    {
      key: "1",
      sku: "FAB-001",
      itemName: "Cotton Twill (Indigo)",
      category: "Fabric",
      location: "A01-R03-S05",
      quantity: 1200,
      status: "In Stock",
    },
    {
      key: "2",
      sku: "TRM-010",
      itemName: "Zipper (YKK #5, Black)",
      category: "Trims",
      location: "B02-R01-S02",
      quantity: 5000,
      status: "In Stock",
    },
    {
      key: "3",
      sku: "FAB-005",
      itemName: "Poly-Cotton Blend (Grey)",
      category: "Fabric",
      location: "A02-R01-S01",
      quantity: 350,
      status: "Low Stock",
    },
    {
      key: "4",
      sku: "ACC-022",
      itemName: "Thread (Polyester, White)",
      category: "Accessories",
      location: "C01-R02-S03",
      quantity: 100,
      status: "Low Stock",
    },
    {
      key: "5",
      sku: "FAB-003",
      itemName: "Denim (Dark Wash)",
      category: "Fabric",
      location: "A01-R02-S01",
      quantity: 0,
      status: "Out of Stock",
    },
    {
      key: "6",
      sku: "TRM-007",
      itemName: "Buttons (Pearl, 20L)",
      category: "Trims",
      location: "B01-R05-S03",
      quantity: 2500,
      status: "In Stock",
    },
  ];

  const columns = [
    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
    },
    {
      title: "Item Name",
      dataIndex: "itemName",
      key: "itemName",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        let color = "blue";
        if (status === "Low Stock") color = "orange";
        if (status === "Out of Stock") color = "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: () => <Button type="link">View</Button>,
    },
  ];

  const [searchText, setSearchText] = useState("");

  return (
    <div className="p-6">
      <Title level={2} className="!mb-6">
        Inventory Management
      </Title>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="border border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <Text className="text-gray-600 text-sm block mb-2">
                Total SKUs
              </Text>
              <Title level={2} className="!mb-0">
                150
              </Title>
              <Text className="text-gray-500 text-xs">
                Unique items in catalog
              </Text>
            </div>
            <AppstoreOutlined className="text-2xl text-gray-400" />
          </div>
        </Card>

        <Card className="border border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <Text className="text-gray-600 text-sm block mb-2">
                Items in Stock
              </Text>
              <Title level={2} className="!mb-0">
                5
              </Title>
              <Text className="text-gray-500 text-xs">
                Across all locations
              </Text>
            </div>
            <InboxOutlined className="text-2xl text-gray-400" />
          </div>
        </Card>

        <Card className="border border-gray-200 bg-red-50">
          <div className="flex items-start justify-between">
            <div>
              <Text className="text-gray-600 text-sm mb-2 flex items-center gap-1">
                Low Stock Items
                <WarningOutlined className="text-orange-500" />
              </Text>
              <Title level={2} className="!mb-0 text-red-600">
                2
              </Title>
              <Text className="text-gray-500 text-xs">
                Needs urgent reorder
              </Text>
            </div>
          </div>
        </Card>

        <Card className="border border-gray-200 bg-red-50">
          <div className="flex items-start justify-between">
            <div>
              <Text className="text-gray-600 text-sm block mb-2">
                Out of Stock
              </Text>
              <Title level={2} className="!mb-0 text-red-600">
                1
              </Title>
              <Text className="text-gray-500 text-xs">
                Currently unavailable
              </Text>
            </div>
            <CloseCircleOutlined className="text-2xl text-red-400" />
          </div>
        </Card>
      </div>

      {/* Current Stock Data */}
      <Card className="!mb-6">
        <Title level={4} className="!mb-2">
          Current Stock Data
        </Title>
        <Text className="text-gray-500 block mb-4">
          Detailed overview of all materials in the warehouse.
        </Text>

        <Input
          placeholder="Search by SKU, item name, or location..."
          prefix={<SearchOutlined />}
          className="mb-4"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <Table columns={columns} dataSource={stockData} pagination={false} />
      </Card>

      {/* Bottom Section: Cycle Count Form and ABC Categorization */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cycle Count Form */}
        <Card>
          <Title level={4} className="!mb-2">
            Cycle Count Form
          </Title>
          <Text className="text-gray-500 block mb-4">
            Perform regular inventory audits.
          </Text>

          <Form layout="vertical">
            <Form.Item label="Item SKU">
              <Input placeholder="e.g., FAB-001" />
            </Form.Item>

            <Form.Item label="Counted Quantity">
              <Input placeholder="e.g., 1200" type="number" />
            </Form.Item>

            <Form.Item label="Location">
              <Input placeholder="e.g., A01-R03-S05" />
            </Form.Item>

            <Button type="primary" block className="!bg-blue-600 !h-10">
              Submit Count
            </Button>
          </Form>
        </Card>

        {/* ABC Categorization */}
        <Card>
          <Title level={4} className="!mb-2">
            ABC Categorization
          </Title>
          <Text className="text-gray-500 block mb-4">
            Prioritize inventory based on value and demand.
          </Text>

          <Space direction="vertical" className="w-full" size="large">
            <div>
              <div className="flex justify-between mb-2">
                <Text strong>Category A</Text>
                <Text className="text-gray-500">150 items (70%)</Text>
              </div>
              <Progress percent={70} strokeColor="#1890ff" showInfo={false} />
              <Text className="text-gray-500 text-xs">
                High value, high demand items
              </Text>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <Text strong>Category B</Text>
                <Text className="text-gray-500">50 items (20%)</Text>
              </div>
              <Progress percent={20} strokeColor="#1890ff" showInfo={false} />
              <Text className="text-gray-500 text-xs">
                Medium value, medium demand items
              </Text>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <Text strong>Category C</Text>
                <Text className="text-gray-500">20 items (10%)</Text>
              </div>
              <Progress percent={10} strokeColor="#1890ff" showInfo={false} />
              <Text className="text-gray-500 text-xs">
                Low value, low demand items
              </Text>
            </div>
          </Space>
        </Card>
      </div>
    </div>
  );
}
