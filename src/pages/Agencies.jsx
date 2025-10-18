import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Table from '../components/Table';
import { evaluationAgencies, consultingAgencies } from '../mocks/agencies';

const Agencies = () => {
  const [currentTab, setCurrentTab] = useState('评估机构');
  const tabs = ['评估机构', '咨询机构'];

  const columns = [
    { title: '编号', key: 'id' },
    { title: '机构名称', key: 'name' },
    { title: '联系人', key: 'contact' },
    { title: '电话', key: 'phone' },
    { title: '类型', key: 'type' },
    { title: '状态', key: 'status', className: 'text-green-600' },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <button className="text-indigo-600 hover:text-indigo-800">详情</button>
      )
    }
  ];

  const data = currentTab === '评估机构' ? evaluationAgencies : consultingAgencies;

  return (
    <div className="space-y-6">
      <PageHeader>
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="输入机构名称"
            className="flex-1 px-4 py-2 border border-slate-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="输入关键字"
            className="flex-1 px-4 py-2 border border-slate-300 rounded-lg"
          />
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            搜索
          </button>
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

export default Agencies;