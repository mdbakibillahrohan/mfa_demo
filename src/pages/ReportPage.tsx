"use client";

import { Card, Row, Col, Typography, Button } from "antd";
import {
  TruckOutlined,
  CheckCircleOutlined,
  ThunderboltOutlined,
  InboxOutlined,
  SafetyOutlined,
  HomeOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  DownloadOutlined,
  FilePdfOutlined,
  PrinterOutlined,
} from "@ant-design/icons";
import { Line, Bar, Area } from "@ant-design/plots";

const { Title, Text } = Typography;

export default function ReportsPage() {
  const kpiData = [
    {
      title: "On-Time Shipments",
      value: "98.5%",
      change: "+1.2% from last month",
      isPositive: true,
      icon: <TruckOutlined className="text-2xl" />,
    },
    {
      title: "Inventory Accuracy",
      value: "99.1%",
      change: "+6.1% from last quarter",
      isPositive: true,
      icon: <CheckCircleOutlined className="text-2xl" />,
    },
    {
      title: "Picking Efficiency",
      value: "55 items/hr",
      change: "+5% from last week",
      isPositive: true,
      icon: <ThunderboltOutlined className="text-2xl" />,
    },
    {
      title: "Receiving Throughput",
      value: "120 units/hr",
      change: "+5% from last month",
      isPositive: true,
      icon: <InboxOutlined className="text-2xl" />,
    },
    {
      title: "Quality Pass Rate",
      value: "97.3%",
      change: "No change",
      isPositive: null,
      icon: <SafetyOutlined className="text-2xl" />,
    },
    {
      title: "Warehouse Utilization",
      value: "72%",
      change: "+3% from last quarter",
      isPositive: true,
      icon: <HomeOutlined className="text-2xl" />,
    },
  ];

  const stockTurnoverData = [
    { month: "Jan", value: 0.8 },
    { month: "Feb", value: 0.9 },
    { month: "Mar", value: 1.1 },
    { month: "Apr", value: 1.0 },
    { month: "May", value: 1.3 },
    { month: "Jun", value: 1.5 },
  ];

  const capacityData = [
    { week: "W1", type: "Used Capacity", value: 65 },
    { week: "W1", type: "Available Capacity", value: 35 },
    { week: "W2", type: "Used Capacity", value: 75 },
    { week: "W2", type: "Available Capacity", value: 25 },
    { week: "W3", type: "Used Capacity", value: 70 },
    { week: "W3", type: "Available Capacity", value: 30 },
    { week: "W4", type: "Used Capacity", value: 85 },
    { week: "W4", type: "Available Capacity", value: 15 },
  ];

  const pickingZoneData = [
    { zone: "Zone A", picks: 45 },
    { zone: "Zone B", picks: 60 },
    { zone: "Zone C", picks: 52 },
    { zone: "Zone D", picks: 65 },
    { zone: "Zone E", picks: 50 },
  ];

  const defectTrendData = [
    { month: "Jan", rate: 2.6 },
    { month: "Feb", rate: 2.4 },
    { month: "Mar", rate: 1.9 },
    { month: "Apr", rate: 2.0 },
    { month: "May", rate: 1.7 },
    { month: "Jun", rate: 1.4 },
  ];

  const stockTurnoverConfig = {
    data: stockTurnoverData,
    xField: "month",
    yField: "value",
    smooth: true,
    point: {
      size: 5,
      shape: "circle",
    },
    yAxis: {
      min: 0,
      max: 1.6,
      tickCount: 5,
    },
  };

  const capacityConfig = {
    data: capacityData,
    xField: "week",
    yField: "value",
    seriesField: "type",
    isStack: true,
    color: ["#000000", "#e5e5e5"],
    legend: {
      position: "bottom" as const,
    },
    yAxis: {
      max: 100,
      label: {
        formatter: (v: string) => `${v}%`,
      },
    },
  };

  const pickingZoneConfig = {
    data: pickingZoneData,
    xField: "zone",
    yField: "picks",
    color: "#000000",
    yAxis: {
      max: 80,
    },
  };

  const defectTrendConfig = {
    data: defectTrendData,
    xField: "month",
    yField: "rate",
    smooth: true,
    color: "#999999",
    areaStyle: {
      fill: "#999999",
      fillOpacity: 0.6,
    },
    yAxis: {
      min: 0,
      max: 3,
      label: {
        formatter: (v: string) => `${v}%`,
      },
    },
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <Title level={2} className="!mb-2">
          Reports & Analytics
        </Title>
        <Text className="text-gray-600">
          Comprehensive insights into warehouse operations, performance metrics,
          and trends.
        </Text>
      </div>

      {/* Key Performance Indicators */}
      <div className="mb-8">
        <Title level={4} className="!mb-4">
          Key Performance Indicators
        </Title>
        <Row gutter={[16, 16]}>
          {kpiData.map((kpi, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card className="h-full">
                <div className="flex items-start justify-between mb-3">
                  <Text className="text-gray-600 text-sm">{kpi.title}</Text>
                  <div className="text-gray-400">{kpi.icon}</div>
                </div>
                <div className="mb-2">
                  <Text className="text-3xl font-semibold">{kpi.value}</Text>
                </div>
                <div className="flex items-center gap-1">
                  {kpi.isPositive === true && (
                    <ArrowUpOutlined className="text-green-600 text-xs" />
                  )}
                  {kpi.isPositive === false && (
                    <ArrowDownOutlined className="text-red-600 text-xs" />
                  )}
                  <Text
                    className={`text-xs ${
                      kpi.isPositive === true
                        ? "text-green-600"
                        : kpi.isPositive === false
                        ? "text-red-600"
                        : "text-gray-500"
                    }`}
                  >
                    {kpi.change}
                  </Text>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Operational Charts */}
      <div className="mb-8">
        <Title level={4} className="!mb-4">
          Operational Charts
        </Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <Card>
              <Title level={5} className="!mb-1">
                Stock Turnover Rate
              </Title>
              <Text className="text-gray-600 text-sm block mb-4">
                Monthly trend of inventory turnover, indicating efficiency.
              </Text>
              <Line {...stockTurnoverConfig} height={250} />
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card>
              <Title level={5} className="!mb-1">
                Warehouse Capacity Utilization
              </Title>
              <Text className="text-gray-600 text-sm block mb-4">
                Weekly usage of warehouse space compared to available capacity.
              </Text>
              <Bar {...capacityConfig} height={250} />
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card>
              <Title level={5} className="!mb-1">
                Picking Performance by Zone
              </Title>
              <Text className="text-gray-600 text-sm block mb-4">
                Average picks per hour across different warehouse zones.
              </Text>
              <Bar {...pickingZoneConfig} height={250} />
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card>
              <Title level={5} className="!mb-1">
                Quality Control Defect Trends
              </Title>
              <Text className="text-gray-600 text-sm block mb-4">
                Monthly trend of defect rates found during quality checks.
              </Text>
              <Area {...defectTrendConfig} height={250} />
            </Card>
          </Col>
        </Row>
      </div>

      {/* Export Reports */}
      <div>
        <Title level={4} className="!mb-4">
          Export Reports
        </Title>
        <div className="flex gap-3">
          <Button icon={<DownloadOutlined />} size="large">
            Export to CSV
          </Button>
          <Button icon={<FilePdfOutlined />} size="large">
            Export to PDF
          </Button>
          <Button icon={<PrinterOutlined />} size="large">
            Print Current View
          </Button>
        </div>
      </div>
    </div>
  );
}
