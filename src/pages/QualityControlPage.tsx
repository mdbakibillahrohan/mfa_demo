"use client";

import {
  Card,
  Typography,
  Checkbox,
  Input,
  Select,
  Button,
  Slider,
  Upload,
  Tag,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

export default function QualityControlPage() {
  const [shadeToleranceLevel, setShadeToleranceLevel] = useState(50);
  const [selectedDefects, setSelectedDefects] = useState<string[]>([]);

  const defectOptions = [
    { label: "Tears", value: "tears" },
    { label: "Stains", value: "stains" },
    { label: "Holes", value: "holes" },
    { label: "Color Variation", value: "color-variation" },
    { label: "Abrasion Marks", value: "abrasion-marks" },
    { label: "Snags/Pulls", value: "snags-pulls" },
  ];

  const fabricDetails = [
    { label: "Roll ID:", value: "FBR-20240715-001" },
    { label: "Supplier:", value: "Global Textiles Inc." },
    { label: "Expected Quantity:", value: "1,500 yards" },
    { label: "Material:", value: "Cotton Twill, 200 GSM" },
    { label: "GRN Date:", value: "2024-07-15" },
    { label: "Current Status:", value: <Tag color="orange">Pending</Tag> },
  ];

  const shadeSwatches = [
    { label: "Reference Standard", color: "#e8f0f5" },
    { label: "Sample 1", color: "#d4e5f0" },
    { label: "Sample 2", color: "#b8d4e8" },
    { label: "Sample 3", color: "#9cc4df" },
  ];

  return (
    <div className="mx-auto">
      {/* Page Title */}
      <Title level={4} className="!mb-3 text-right mx-3">
        Quality Control - Fabric Inspection
      </Title>

      {/* Fabric Roll Details */}
      <Card className="!mb-6 shadow-sm">
        <Title level={5} className="!mb-4 text-blue-600">
          Fabric Roll Details
        </Title>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
          {fabricDetails.map((detail, index) => (
            <div key={index}>
              <Text className="text-gray-600 text-sm">{detail.label}</Text>{" "}
              <Text className="font-medium">{detail.value}</Text>
            </div>
          ))}
        </div>
      </Card>

      {/* Defect Inspection & Reporting */}
      <Card className="!mb-6 shadow-sm">
        <Title level={5} className="!mb-4 text-blue-600">
          Defect Inspection & Reporting
        </Title>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Defect Checklist */}
          <div>
            <Text className="font-semibold block mb-3">Defect Checklist</Text>
            <div className="space-y-2">
              {defectOptions.map((option) => (
                <div key={option.value}>
                  <Checkbox
                    value={option.value}
                    checked={selectedDefects.includes(option.value)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedDefects([...selectedDefects, option.value]);
                      } else {
                        setSelectedDefects(
                          selectedDefects.filter((d) => d !== option.value)
                        );
                      }
                    }}
                  >
                    {option.label}
                  </Checkbox>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Inspection Notes, Severity, Photo */}
          <div className="space-y-4">
            <div>
              <Text className="font-semibold block mb-2">Inspection Notes</Text>
              <TextArea
                rows={4}
                placeholder="Describe any identified defects or observations..."
                className="resize-none"
              />
            </div>

            <div>
              <Text className="font-semibold block mb-2">Severity Level</Text>
              <Select
                defaultValue="minor"
                className="w-full"
                options={[
                  { value: "minor", label: "Minor (Acceptable)" },
                  {
                    value: "moderate",
                    label: "Moderate (Review Required)",
                  },
                  { value: "major", label: "Major (Reject)" },
                  { value: "critical", label: "Critical (Quarantine)" },
                ]}
              />
            </div>

            <div>
              <Text className="font-semibold block mb-2">Photo Evidence</Text>
              <Upload>
                <Button icon={<UploadOutlined />} className="w-full">
                  Upload Defect Photos
                </Button>
              </Upload>
            </div>
          </div>
        </div>
      </Card>

      {/* Shade Matching & Disposition */}
      <Card className="!mb-6 shadow-sm">
        <Title level={5} className="!mb-4 text-blue-600">
          Shade Matching & Disposition
        </Title>

        <div className="mb-6">
          <Text className="font-semibold block mb-3">Shade Matching Tool</Text>
          <div className="flex gap-4">
            {shadeSwatches.map((swatch, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div
                  className="w-20 h-20 rounded-lg border-2 border-gray-300"
                  style={{ backgroundColor: swatch.color }}
                />
                <Text className="text-xs text-gray-600 text-center">
                  {swatch.label}
                </Text>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <Text className="font-semibold">Shade Tolerance Level:</Text>
            <Text className="text-blue-600 font-semibold">
              {shadeToleranceLevel}%
            </Text>
          </div>
          <Slider
            value={shadeToleranceLevel}
            onChange={setShadeToleranceLevel}
            tooltip={{ open: false }}
            className="mb-2"
          />
          <Paragraph className="text-xs text-gray-500 !mb-0">
            Adjust the slider to define the acceptable variance from the
            reference shade.
          </Paragraph>
        </div>

        <div className="flex gap-4 justify-end">
          <Button danger size="large" className="px-8">
            Quarantine Fabric
          </Button>
          <Button type="primary" size="large" className="px-8 bg-blue-600">
            Approve Fabric
          </Button>
        </div>
      </Card>
    </div>
  );
}
