"use client";

import { Card, Input, Button, Typography, Table } from "antd";
import { SearchOutlined, ScanOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Title, Text } = Typography;

export default function PutawayPage() {
  const [, setSelectedBin] = useState<string | null>("R2-6A");

  const warehouseGrid = [
    [
      { id: "R1-1A", status: "full" },
      { id: "R1-2B", status: "available" },
      { id: "R1-3C", status: "available" },
      { id: "R1-4A", status: "available" },
      { id: "R1-5B", status: "available" },
      { id: "R1-6C", status: "available" },
      { id: "R1-7A", status: "available" },
      { id: "R1-8B", status: "full" },
      { id: "R1-9C", status: "available" },
      { id: "R1-10A", status: "available" },
    ],
    [
      { id: "R2-1B", status: "available" },
      { id: "R2-2C", status: "available" },
      { id: "R2-3A", status: "available" },
      { id: "R2-4B", status: "available" },
      { id: "R2-5C", status: "full" },
      { id: "R2-6A", status: "selected" },
      { id: "R2-7B", status: "available" },
      { id: "R2-8C", status: "available" },
      { id: "R2-9A", status: "available" },
      { id: "R2-10B", status: "available" },
    ],
    [
      { id: "R3-1C", status: "available" },
      { id: "R3-2A", status: "full" },
      { id: "R3-3B", status: "selected" },
      { id: "R3-4C", status: "available" },
      { id: "R3-5A", status: "available" },
      { id: "R3-6B", status: "available" },
      { id: "R3-7C", status: "available" },
      { id: "R3-8A", status: "available" },
      { id: "R3-9B", status: "full" },
      { id: "R3-10C", status: "available" },
    ],
    [
      { id: "R4-1A", status: "available" },
      { id: "R4-2B", status: "available" },
      { id: "R4-3C", status: "available" },
      { id: "R4-4A", status: "available" },
      { id: "R4-5B", status: "available" },
      { id: "R4-6C", status: "full" },
      { id: "R4-7A", status: "available" },
      { id: "R4-8B", status: "available" },
      { id: "R4-9C", status: "available" },
      { id: "R4-10A", status: "available" },
    ],
  ];

  const recentPutaways = [
    {
      key: "1",
      sku: "FAB-0012",
      location: "A1-03-B",
      qty: 50,
    },
    {
      key: "2",
      sku: "ACC-0045",
      location: "C2-01-A",
      qty: 200,
    },
  ];

  const columns = [
    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <Title level={2} className="!mb-2">
          Putaway & Storage
        </Title>
        <Text className="text-gray-600">
          Efficiently assign and confirm storage locations for received items.
        </Text>
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex gap-3">
        <Input
          placeholder="Search item by SKU or type..."
          prefix={<SearchOutlined className="text-gray-400" />}
          size="large"
          className="flex-1"
        />
        <Button type="primary" size="large">
          Search
        </Button>
        <Button size="large">Queue: 3</Button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Item Details */}
        <Card>
          <Title level={4} className="!mb-4">
            Item Details
          </Title>
          <Text className="text-gray-500">
            Search for an item to view details.
          </Text>
        </Card>

        {/* Warehouse Location Map */}
        <Card>
          <Title level={4} className="!mb-2">
            Warehouse Location Map
          </Title>
          <Text className="text-gray-600 text-sm block mb-4">
            Scan location or click a bin/rack to select for putaway.
          </Text>
          <div className="space-y-2">
            {warehouseGrid.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-2">
                {row.map((bin) => (
                  <button
                    key={bin.id}
                    onClick={() => setSelectedBin(bin.id)}
                    className={`flex-1 h-16 border rounded text-xs font-medium transition-colors ${
                      bin.status === "full"
                        ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                        : bin.status === "selected"
                        ? "bg-blue-100 border-blue-400 text-blue-700"
                        : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                    disabled={bin.status === "full"}
                  >
                    {bin.status === "full" ? (
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="text-[10px]">FULL</div>
                        <div className="text-[10px]">{bin.id}</div>
                      </div>
                    ) : (
                      bin.id
                    )}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Confirm Putaway */}
      <Card className="mb-6">
        <Title level={4} className="!mb-2">
          Confirm Putaway
        </Title>
        <Text className="text-gray-600 text-sm block mb-4">
          Scan location barcode and confirm item placement.
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <Text className="block mb-2 font-medium">Location Scan</Text>
            <Input
              placeholder="Scan Bin/Rack ID"
              prefix={<ScanOutlined />}
              size="large"
            />
          </div>
          <div>
            <Text className="block mb-2 font-medium">Quantity</Text>
            <Input
              placeholder="1"
              type="number"
              size="large"
              defaultValue={1}
            />
          </div>
        </div>
        <Button type="primary" size="large" className="w-full md:w-auto">
          Confirm Putaway
        </Button>
      </Card>

      {/* Recent Putaways */}
      <Card>
        <Title level={4} className="!mb-4">
          Recent Putaways
        </Title>
        <Table
          columns={columns}
          dataSource={recentPutaways}
          pagination={false}
        />
      </Card>
    </div>
  );
}
