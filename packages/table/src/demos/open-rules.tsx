import React from 'react';
import { Tag, Space } from 'antd';
import type { ProColumns } from '@galiojs/pro-table';
import ProTable from '@galiojs/pro-table';

type GithubIssueItem = {
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: '30%',
  },
  {
    title: '状态',
    dataIndex: 'state',
    filters: true,
    onFilter: true,
    valueType: 'select',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: {
        text: '未解决',
        status: 'Error',
      },
      closed: {
        text: '已解决',
        status: 'Success',
        disabled: true,
      },
      processing: {
        text: '解决中',
        status: 'Processing',
      },
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    search: false,
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_);
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: 'date',
    hideInSearch: true,
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },
];

export default () => {
  return (
    <>
      <ProTable<GithubIssueItem>
        columns={columns}
        request={async () => ({
          success: true,
          data: [
            {
              id: 624748504,
              number: 6689,
              title: '🐛 [BUG]yarn install命令 antd2.4.5会报错',
              labels: [
                {
                  name: 'bug',
                  color: 'error',
                },
              ],
              state: 'open',
              locked: false,
              comments: 1,
              created_at: '2020-05-26T09:42:56Z',
              updated_at: '2020-05-26T10:03:02Z',
              closed_at: null,
              author_association: 'NONE',
              user: 'chenshuai2144',
              avatar:
                'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
            },
          ],
        })}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        form={{
          ignoreRules: false,
        }}
        dateFormatter="string"
        headerTitle="高级表格"
      />
      <ProTable<GithubIssueItem>
        columns={columns}
        request={async () => ({
          success: true,
          data: [
            {
              id: 624748504,
              number: 6689,
              title: '🐛 [BUG]yarn install命令 antd2.4.5会报错',
              labels: [
                {
                  name: 'bug',
                  color: 'error',
                },
              ],
              state: 'open',
              locked: false,
              comments: 1,
              created_at: '2020-05-26T09:42:56Z',
              updated_at: '2020-05-26T10:03:02Z',
              closed_at: null,
              author_association: 'NONE',
              user: 'chenshuai2144',
              avatar:
                'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
            },
          ],
        })}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        dateFormatter="string"
        headerTitle="高级表格"
      />
    </>
  );
};
