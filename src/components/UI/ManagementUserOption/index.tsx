import React from "react";
import { CopyOutlined } from "@ant-design/icons";
import {
  AutoComplete,
  Button,
  Cascader,
  Col,
  DatePicker,
  Input,
  InputNumber,
  Row,
  Select,
  Tooltip,
} from "antd";

const { Option } = Select;

const optionConfig = [
  {
    label: "key",
    value: "key",
  },
  { label: "name", value: "name" },
  { label: "createDate", value: "createDate" },
  { label: "password", value: "password" },
  { label: "telnumber", value: "telnumber" },
];

export const ManagementUserOption: React.FC = () => (
  <div className="site-input-group-wrapper">
    <Input.Group compact>
      <Select defaultValue="name" style={{ width: "10%" }}>
        {optionConfig.map(({ label, value }) => (
          <Option value={value} key={value}>
            {label}
          </Option>
        ))}
      </Select>
      <Input.Search
        style={{ width: "30%" }}
        placeholder="input search text"
        enterButton="Search"
        size="large"
        loading
      />
    </Input.Group>
  </div>
);
