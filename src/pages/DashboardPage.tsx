"use client";

import { Card, Typography, Button } from "antd";
import {
  DollarOutlined,
  InboxOutlined,
  TruckOutlined,
  UnorderedListOutlined,
  ArrowRightOutlined,
  SyncOutlined,
  WarningOutlined,
  FileTextOutlined,
  AlertOutlined,
  ShoppingOutlined,
  PlusCircleOutlined,
  SafetyOutlined,
  ContainerOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Inventory Value",
      value: "$12.5M",
      description: "Estimated current market value.",
      icon: <DollarOutlined className="text-xl" />,
    },
    {
      title: "Orders Processed Today",
      value: "235",
      description: "Orders moved to packing/shipping.",
      icon: <InboxOutlined className="text-xl" />,
    },
    {
      title: "Pending Deliveries",
      value: "18",
      description: "Inbound shipments awaiting receipt.",
      icon: <TruckOutlined className="text-xl" />,
      valueColor: "text-orange-500",
    },
    {
      title: "Active Tasks",
      value: "7",
      description: "Operational tasks requiring attention.",
      icon: <UnorderedListOutlined className="text-xl" />,
    },
  ];

  const recentActivities = [
    {
      icon: <SyncOutlined className="text-blue-500" />,
      title: "GRN #20240715-001 created by John Doe",
      time: "2 minutes ago",
      bgColor: "bg-blue-50",
    },
    {
      icon: <WarningOutlined className="text-red-500" />,
      title: "QC issue found on Fabric Roll #F-54321",
      time: "15 minutes ago",
      bgColor: "bg-red-50",
    },
    {
      icon: <FileTextOutlined className="text-blue-500" />,
      title: "New PO #P-9876 received from supplier",
      time: "30 minutes ago",
      bgColor: "bg-blue-50",
    },
    {
      icon: <AlertOutlined className="text-orange-500" />,
      title: "Low stock alert for Blue Denim (SKU: BD-101)",
      time: "1 hour ago",
      bgColor: "bg-orange-50",
    },
    {
      icon: <ShoppingOutlined className="text-green-500" />,
      title: "Order #ORD-789 shipped to customer",
      time: "2 hours ago",
      bgColor: "bg-green-50",
    },
  ];

  const quickActions = [
    {
      icon: <PlusCircleOutlined className="text-xl" />,
      title: "Create GRN",
    },
    {
      icon: <SafetyOutlined className="text-xl" />,
      title: "Start QC Inspection",
    },
    {
      icon: <ContainerOutlined className="text-xl" />,
      title: "Perform Putaway",
    },
    {
      icon: <ProfileOutlined className="text-xl" />,
      title: "Generate Pick List",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Title level={2} className="!mb-2">
            Good morning, <span className="text-blue-600">Alex Chen</span>!
          </Title>
          <Paragraph className="!mb-0 text-gray-600">
            Welcome back, your current role is Warehouse Manager. Here's an
            overview of today's warehouse operations.
          </Paragraph>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <Text className="text-gray-600 text-sm">{stat.title}</Text>
                <div className="text-gray-400">{stat.icon}</div>
              </div>
              <Title level={2} className={`!mb-1 ${stat.valueColor || ""}`}>
                {stat.value}
              </Title>
              <Text className="text-gray-500 text-xs">{stat.description}</Text>
            </Card>
          ))}
        </div>

        {/* Recent Activity and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card
            title={
              <div className="flex items-center justify-between">
                <Text className="font-semibold text-base">Recent Activity</Text>
                <Button type="link" className="text-blue-600 p-0 h-auto">
                  View All <ArrowRightOutlined />
                </Button>
              </div>
            }
            className="shadow-sm"
          >
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`${activity.bgColor} p-2 rounded-lg`}>
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <Text className="text-sm block mb-1">
                        {activity.title}
                      </Text>
                      <Text className="text-xs text-gray-500">
                        {activity.time}
                      </Text>
                    </div>
                  </div>
                  <ArrowRightOutlined className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card
            title={
              <div className="flex items-center justify-between">
                <Text className="font-semibold text-base">Quick Actions</Text>
                <Button type="link" className="text-blue-600 p-0 h-auto">
                  View All <ArrowRightOutlined />
                </Button>
              </div>
            }
            className="shadow-sm"
          >
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  style={{
                    height: "100px !important",
                  }}
                  className="flex flex-col items-center justify-center gap-2 hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  {action.icon}
                  <Text className="text-sm">{action.title}</Text>
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
