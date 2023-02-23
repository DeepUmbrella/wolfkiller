import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

export interface ManagementUserItem {
  key: string;
  name: string;
  telnumber: number;
  password: string;
  createDate: string;
}
export interface ManagementUserList {
  userList?: ManagementUserItem[];
}

export const ManagementUserList: React.FC<ManagementUserList> = ({
  userList,
}) => {
  const columns: ColumnsType<ManagementUserItem> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "TelNumber",
      dataIndex: "telnumber",
      key: "telnumber",
    },
    {
      title: "password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "CreateDate",
      key: "createDate",
      dataIndex: "createDate",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              console.log(456);
            }}
          >
            Invite {record.name}
          </a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data: ManagementUserItem[] = [
    {
      key: "1",
      name: "John Brown",
      password: "New York No. 1 Lake Park",
      telnumber: 1222222,
      createDate: "2",
    },
    {
      key: "2",
      name: "Jim Green",
      telnumber: 666666666,
      password: "London No. 1 Lake Park",
      createDate: "1677032212724",
    },
    {
      key: "3",
      name: "Joe Black",
      createDate: "1677032212724",
      telnumber: 7777777777777,
      password: "Sydney No. 1 Lake Park",
    },
  ];

  return (
    <div className="management-list">
      <Table dataSource={data}>
        {columns.map(({ title, dataIndex, key, render }) => (
          <Table.Column
            title={title}
            dataIndex={dataIndex}
            key={key}
            render={render}
          />
        ))}
      </Table>
    </div>
  );
};
