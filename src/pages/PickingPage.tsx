"use client";

import { Button, Card, Input, Table, Tag, Typography } from "antd";
import { PlusOutlined, FilterOutlined, ScanOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function PickingPage() {
  const pickingData = [
    {
      key: "1",
      sku: "FAB-DENIM-BLU-M",
      description: "Medium Wash Blue Denim Fabric Roll",
      location: "A01-R03-B05",
      shade: "Ocean Blue",
      color: "Blue",
      required: 100,
      picked: 0,
      status: "Pending",
    },
    {
      key: "2",
      sku: "ACC-BUTTON-SIL-S",
      description: "Silver Metal Buttons (Small)",
      location: "C05-R01-B02",
      shade: "N/A",
      color: "Silver",
      required: 500,
      picked: 0,
      status: "Pending",
    },
    {
      key: "3",
      sku: "FAB-COTTON-GRY-L",
      description: "Light Grey Cotton Twill Fabric",
      location: "A02-R01-B01",
      shade: "Stone Grey",
      color: "Grey",
      required: 150,
      picked: 0,
      status: "Pending",
    },
    {
      key: "4",
      sku: "ACC-ZIPPER-BLK-18",
      description: "Black Nylon Zipper 18 inch",
      location: "C03-R02-B04",
      shade: "N/A",
      color: "Black",
      required: 50,
      picked: 0,
      status: "Pending",
    },
  ];

  const columns = [
    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
      width: 180,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 250,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      width: 130,
    },
    {
      title: "Shade",
      dataIndex: "shade",
      key: "shade",
      width: 120,
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
      width: 100,
    },
    {
      title: "Required",
      dataIndex: "required",
      key: "required",
      width: 100,
    },
    {
      title: "Picked",
      dataIndex: "picked",
      key: "picked",
      width: 100,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (status: string) => <Tag color="default">{status}</Tag>,
    },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <Title level={2} className="!mb-0">
          Picking Operations
        </Title>
      </div>

      <div className="flex gap-4 mb-6">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          className="flex-1 max-w-md h-12"
        >
          New Pick Order
        </Button>
        <Button icon={<FilterOutlined />} size="large" className="h-12">
          Filter Pick Lists
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <div className="mb-4">
              <Title level={4} className="!mb-2">
                Current Pick Order #PO-20240915-001
              </Title>
              <div className="flex gap-8 text-sm">
                <div>
                  <Text className="text-gray-500">Customer:</Text>
                  <Text className="ml-1 font-medium">Apex Apparel Co.</Text>
                </div>
                <div>
                  <Text className="text-gray-500">Due Date:</Text>
                  <Text className="ml-1 font-medium">2024-09-20</Text>
                </div>
                <div>
                  <Text className="text-gray-500">Status:</Text>
                  <Tag color="blue" className="ml-1">
                    In Progress
                  </Tag>
                </div>
              </div>
            </div>

            <div>
              <Title level={5} className="!mb-4">
                Items to Pick
              </Title>
              <Table
                columns={columns}
                dataSource={pickingData}
                pagination={false}
                scroll={{ x: 1200 }}
                className="border border-gray-200 rounded-lg"
              />
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="mb-4">
            <Title level={5} className="!mb-4">
              Scan Verification
            </Title>
            <Input
              placeholder="Scan item barcode"
              prefix={<ScanOutlined className="text-gray-400" />}
              size="large"
              className="mb-4"
            />
            <Button type="default" size="large" block>
              Verify Scan
            </Button>
          </Card>

          <Card>
            <Title level={5} className="!mb-4">
              Order Picking Progress
            </Title>
            <div className="text-center py-8">
              <Text className="text-3xl font-bold">0 / 800</Text>
              <Text className="block text-gray-500 mt-2">Items Picked</Text>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
