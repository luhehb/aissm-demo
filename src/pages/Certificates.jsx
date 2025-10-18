import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Table from '../components/Table';
import { enterpriseCertificates, assessors, chiefAssessors, trainers } from '../mocks/certificates';

const Certificates = () => {
  const [currentTab, setCurrentTab] = useState('企业标准符合性证书');
  const tabs = ['企业标准符合性证书', '评估师', '主任评估师', '培训讲师'];

  const getTableData = () => {
    switch (currentTab) {
      case '企业标准符合性证书':
        return {
          columns: [
            { title: '证书编号', key: 'id' },
            { title: '公司名称', key: 'company' },
            { title: '级别', key: 'level' },
            { title: '核发时间', key: 'issuedAt' },
            { title: '有效期至', key: 'validUntil' },
            { title: '评估组长', key: 'leader' },
            {
              title: '评估范围',
              key: 'scope',
              className: 'max-w-xs truncate',
              truncate: true
            },
            {
              title: '证书状态',
              key: 'status',
              className: 'text-green-600'
            },
            {
              title: '操作',
              key: 'action',
              render: () => (
                <button className="text-indigo-600 hover:text-indigo-800">查看</button>
              )
            }
          ],
          data: enterpriseCertificates
        };
      case '评估师':
        return {
          columns: [
            { title: '编号', key: 'id' },
            { title: '姓名', key: 'name' },
            { title: '机构', key: 'org' },
            { title: '级别', key: 'level' },
            { title: '状态', key: 'status', className: 'text-green-600' },
            {
              title: '操作',
              key: 'action',
              render: () => (
                <button className="text-indigo-600 hover:text-indigo-800">查看</button>
              )
            }
          ],
          data: assessors
        };
      case '主任评估师':
        return {
          columns: [
            { title: '编号', key: 'id' },
            { title: '姓名', key: 'name' },
            { title: '机构', key: 'org' },
            { title: '级别', key: 'level' },
            { title: '状态', key: 'status', className: 'text-green-600' },
            {
              title: '操作',
              key: 'action',
              render: () => (
                <button className="text-indigo-600 hover:text-indigo-800">查看</button>
              )
            }
          ],
          data: chiefAssessors
        };
      case '培训讲师':
        return {
          columns: [
            { title: '编号', key: 'id' },
            { title: '姓名', key: 'name' },
            { title: '机构', key: 'org' },
            { title: '级别', key: 'level' },
            { title: '状态', key: 'status', className: 'text-green-600' },
            {
              title: '操作',
              key: 'action',
              render: () => (
                <button className="text-indigo-600 hover:text-indigo-800">查看</button>
              )
            }
          ],
          data: trainers
        };
      default:
        return { columns: [], data: [] };
    }
  };

  const { columns, data } = getTableData();

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">证书公示</h1>
        <p className="text-slate-600">查看各类证书和资质信息</p>
      </div>

      <PageHeader>
        <div className="flex gap-4 mb-6">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">全国</button>
          <select className="px-4 py-2 border border-slate-300 rounded-lg">
            <option>选择行业</option>
          </select>
          <select className="px-4 py-2 border border-slate-300 rounded-lg">
            <option>选择级别</option>
          </select>
          <input
            type="text"
            placeholder="输入关键字搜索"
            className="flex-1 px-4 py-2 border border-slate-300 rounded-lg"
          />
        </div>

        <div className="flex gap-2 border-b mb-6">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`px-6 py-3 transition-colors ${
                currentTab === tab
                  ? 'border-b-2 border-indigo-600 text-indigo-600 font-medium'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <Table columns={columns} data={data} />
      </PageHeader>
    </div>
  );
};

export default Certificates;