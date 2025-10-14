"use client";

import {
  Card,
  Input,
  Button,
  Select,
  Progress,
  Typography,
  Space,
  Badge,
  Row,
  Col,
} from "antd";
import { ReloadOutlined, EyeOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Title, Text } = Typography;

export default function PackingPage() {
  const recentIssuances = [
    {
      mrn: "MRN-2024-0012",
      date: "2024-07-29 10:30",
      status: "Completed",
      statusColor: "success",
    },
    {
      mrn: "MRN-2024-0011",
      date: "2024-07-29 09:15",
      status: "Pending MRN",
      statusColor: "processing",
    },
    {
      mrn: "MRN-2024-0010",
      date: "2024-07-28 16:00",
      status: "Completed",
      statusColor: "success",
    },
    {
      mrn: "MRN-2024-0009",
      date: "2024-07-28 11:45",
      status: "In Progress",
      statusColor: "warning",
    },
    {
      mrn: "MRN-2024-0008",
      date: "2024-07-27 14:00",
      status: "Completed",
      statusColor: "success",
    },
  ];

  return (
    <div className="p-6">
      <Title level={2} className="!mb-6">
        Packing & Issuance
      </Title>

      <Row gutter={24}>
        {/* Left Column - Packing Details */}
        <Col xs={24} lg={14}>
          <Card title="Packing Details" className="mb-6">
            <Text type="secondary" className="block mb-4">
              Manage material packing and issuance to production.
            </Text>

            <Row gutter={16}>
              <Col span={16}>
                <div className="mb-4">
                  <Text strong className="block mb-2">
                    Picking List ID
                  </Text>
                  <Input
                    placeholder="PL-202407-001"
                    defaultValue="PL-202407-001"
                  />
                </div>
              </Col>
              <Col span={8}>
                <div className="mb-4">
                  <Text strong className="block mb-2">
                    &nbsp;
                  </Text>
                  <Button icon={<ReloadOutlined />} className="w-full">
                    Load List
                  </Button>
                </div>
              </Col>
            </Row>

            <div className="mb-4">
              <Text strong className="block mb-2">
                Item SKU
              </Text>
              <Input
                placeholder="FAB-COT-DENIM-001"
                defaultValue="FAB-COT-DENIM-001"
                className="bg-gray-100"
              />
            </div>

            <Row gutter={16}>
              <Col span={12}>
                <div className="mb-4">
                  <Text strong className="block mb-2">
                    Required Quantity
                  </Text>
                  <Input
                    placeholder="150"
                    defaultValue="150"
                    className="bg-gray-100"
                  />
                </div>
              </Col>
              <Col span={12}>
                <div className="mb-4">
                  <Text strong className="block mb-2">
                    Scanned Quantity
                  </Text>
                  <Input
                    placeholder="130"
                    defaultValue="130"
                    className="bg-gray-100"
                  />
                </div>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <div className="mb-4">
                  <Text strong className="block mb-2">
                    Location
                  </Text>
                  <Input
                    placeholder="A1-B2-C3"
                    defaultValue="A1-B2-C3"
                    className="bg-gray-100"
                  />
                </div>
              </Col>
              <Col span={12}>
                <div className="mb-4">
                  <Text strong className="block mb-2">
                    Batch Number
                  </Text>
                  <Input
                    placeholder="BCH-202407-001"
                    defaultValue="BCH-202407-001"
                    className="bg-gray-100"
                  />
                </div>
              </Col>
            </Row>

            <div className="mb-4">
              <Text strong className="block mb-2">
                Protective Packaging
              </Text>
              <Select defaultValue="bubble-wrap" className="w-full">
                <Select.Option value="bubble-wrap">Bubble Wrap</Select.Option>
                <Select.Option value="foam">Foam Padding</Select.Option>
                <Select.Option value="cardboard">Cardboard Box</Select.Option>
                <Select.Option value="plastic">Plastic Wrap</Select.Option>
              </Select>
            </div>

            <div className="mb-4">
              <Text strong className="block mb-2">
                Special Instructions
              </Text>
              <TextArea
                rows={4}
                placeholder="Add any specific handling notes..."
              />
            </div>

            <div className="bg-gray-50 p-4 rounded mb-4">
              <Space size="large">
                <Text>
                  Required: <Text strong>150</Text>
                </Text>
                <Text>
                  Scanned:{" "}
                  <Text strong className="text-blue-600">
                    130
                  </Text>
                </Text>
                <Text>
                  Remaining:{" "}
                  <Text strong className="text-orange-600">
                    20
                  </Text>
                </Text>
                <Badge
                  status="warning"
                  text="Quantity Mismatch"
                  className="ml-4"
                />
              </Space>
            </div>

            <Space className="w-full justify-center">
              <Button size="large">Save Draft</Button>
              <Button type="primary" size="large" className="bg-blue-600">
                Generate MRN
              </Button>
              <Button type="primary" size="large" className="bg-blue-700">
                Issue to Production
              </Button>
            </Space>
          </Card>
        </Col>

        {/* Right Column - Packing Overview & Recent Issuances */}
        <Col xs={24} lg={10}>
          <Card title="Packing Overview" className="mb-6">
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <Text>Items Packed:</Text>
                <Text strong className="text-2xl">
                  130
                </Text>
              </div>
              <div className="flex justify-between mb-4">
                <Text>Items Remaining:</Text>
                <Text strong className="text-2xl text-orange-600">
                  20
                </Text>
              </div>
            </div>

            <div className="mb-4">
              <Text className="block mb-2">Completion:</Text>
              <Progress percent={87} strokeColor="#1890ff" />
              <Text type="secondary" className="text-sm">
                87% Complete
              </Text>
            </div>

            <div>
              <Text className="block mb-2">Status:</Text>
              <Badge
                status="processing"
                text="In Progress"
                className="text-base"
              />
            </div>
          </Card>

          <Card title="Recent Issuances">
            <div className="space-y-4">
              {recentIssuances.map((issuance) => (
                <div
                  key={issuance.mrn}
                  className="flex items-center justify-between border-b border-gray-100 pb-3"
                >
                  <div className="flex-1">
                    <Text strong className="block">
                      {issuance.mrn}
                    </Text>
                    <Text type="secondary" className="text-sm">
                      {issuance.date}
                    </Text>
                  </div>
                  <Space>
                    <Badge
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      status={issuance.statusColor as any}
                      text={issuance.status}
                      className={
                        issuance.status === "Completed"
                          ? "text-green-600"
                          : issuance.status === "Pending MRN"
                          ? "text-blue-600"
                          : "text-orange-600"
                      }
                    />
                    <Button type="text" icon={<EyeOutlined />} />
                  </Space>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
