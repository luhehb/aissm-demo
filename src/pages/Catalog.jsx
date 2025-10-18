import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Table from '../components/Table';
import { certifiedProducts, registeredProducts } from '../mocks/products';

const Catalog = () => {
  const [currentTab, setCurrentTab] = useState('认证产品目录');
  const tabs = ['认证产品目录', '注册产品目录'];

  const columns = [
    { title: '编号', key: 'id' },
    { title: '产品名称', key: 'name' },
    { title: '服务商', key: 'vendor' },
    { title: '类型', key: 'category' },
    { title: '适用范围', key: 'scope' },
    { title: '版本', key: 'version' },
    { title: '等级', key: 'grade' },
    { title: '核发时间', key: 'issuedAt' },
    { title: '有效期至', key: 'validUntil' },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <div className="space-x-2">
          <button className="text-indigo-600 hover:text-indigo-800">证书</button>
          <button className="text-indigo-600 hover:text-indigo-800">联系我们</button>
        </div>
      )
    }
  ];

  const data = currentTab === '认证产品目录' ? certifiedProducts : registeredProducts;

  return (
    <div className="space-y-6">
      <PageHeader>
        <div className="mb-6">
          <input
            type="text"
            placeholder="输入关键字搜索"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg"
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

export default Catalog;