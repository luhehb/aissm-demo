import React from 'react'

/**
 * Agencies.jsx
 * - Tabs（评估机构 / 咨询机构）+ 右侧两个搜索框，处于同一水平线
 * - 点击 Tab 切换表格
 * - 表格列：编号 / 机构名称 / 联系人 / 电话 / 类型 / 状态 / 操作
 * - 全为 mock 数据，仅做样式与交互演示
 */

const TABS = [
  { key: 'eva', label: '评估机构' },
  { key: 'consult', label: '咨询机构' },
]

// ---------- Mock 数据 ----------
const evaluationOrgs = [
  {
    code: 'CMMM-CA-001',
    name: '中国软件评测中心（工业和信息化部软件与集成电路促进中心）',
    contact: '李媛智',
    phone: '18600368300',
    type: '评估机构',
    status: '有效',
  },
  {
    code: 'CMMM-CA-002',
    name: '中国信息通信研究院',
    contact: '王雪',
    phone: '13810289038',
    type: '评估机构',
    status: '有效',
  },
  {
    code: 'CMMM-CA-003',
    name: '工业和信息化部装备工业发展中心',
    contact: '刘壮',
    phone: '17319038226',
    type: '评估机构',
    status: '有效',
  },
  {
    code: 'CMMM-CA-004',
    name: '机械工业信息研究院',
    contact: '朱辉杰',
    phone: '13910396057',
    type: '评估机构',
    status: '有效',
  },
  {
    code: 'CMMM-CA-005',
    name: '中机第一设计研究院有限公司',
    contact: '严野',
    phone: '15955186663',
    type: '评估机构',
    status: '有效',
  },
  {
    code: 'CMMM-CA-006',
    name: '北京机械工业自动化研究所有限公司',
    contact: '王宁威',
    phone: '13701286149',
    type: '评估机构',
    status: '有效',
  },
  {
    code: 'CMMM-CA-007',
    name: '中国电子技术标准化研究院',
    contact: '张敏',
    phone: '13601000000',
    type: '评估机构',
    status: '有效',
  },
  {
    code: 'CMMM-CA-008',
    name: '清华大学机械工程系智能制造研究中心',
    contact: '周亮',
    phone: '13501000001',
    type: '评估机构',
    status: '有效',
  },
]

const consultOrgs = [
  {
    code: 'CMMM-CC-001',
    name: '北京赛迪顾问股份有限公司',
    contact: '刘璐',
    phone: '13910000002',
    type: '咨询机构',
    status: '有效',
  },
  {
    code: 'CMMM-CC-002',
    name: '中国信通院咨询服务中心',
    contact: '陈阳',
    phone: '13800000003',
    type: '咨询机构',
    status: '有效',
  },
  {
    code: 'CMMM-CC-003',
    name: '上海产业互联网研究院',
    contact: '赵博',
    phone: '13700000004',
    type: '咨询机构',
    status: '有效',
  },
  {
    code: 'CMMM-CC-004',
    name: '深圳智造咨询有限公司',
    contact: '李伟',
    phone: '13600000005',
    type: '咨询机构',
    status: '有效',
  },
  {
    code: 'CMMM-CC-005',
    name: '广州工信咨询中心',
    contact: '黄宇',
    phone: '13500000006',
    type: '咨询机构',
    status: '有效',
  },
  {
    code: 'CMMM-CC-006',
    name: '杭州数字化转型研究院',
    contact: '周晨',
    phone: '13400000007',
    type: '咨询机构',
    status: '有效',
  },
]

// ---------- 顶部：Tabs + 两个搜索框（同一水平线） ----------
const TabsAndSearch = ({ active, onChange }) => {
  return (
    <div className="grid md:grid-cols-[1fr_auto] items-center gap-4">
      {/* 左：Tabs（更紧凑的间距，统一高度/字号） */}
      <div
        className="h-10 flex items-center gap-4 md:gap-6 overflow-x-auto whitespace-nowrap"
        role="tablist"
        aria-label="机构类型"
      >
        {TABS.map((t) => {
          const isActive = active === t.key
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(t.key)}
              className={`relative h-10 flex items-center px-1 select-none text-base
                ${isActive ? 'text-ink font-medium' : 'text-ink-muted hover:text-ink'}`}
            >
              <span>{t.label}</span>
              {isActive && (
                <span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-[2px] h-[3px] rounded bg-brand-accent"
                />
              )}
            </button>
          )
        })}
      </div>

      {/* 右：两个搜索框（“机构名称”和“关键词”），保持右对齐 */}
      <div className="h-10 flex items-center justify-end gap-4 shrink-0">
        <form
          role="search"
          className="relative h-10"
          onSubmit={(e) => e.preventDefault()}
          aria-label="机构名称搜索"
        >
          <input
            className="h-full w-56 md:w-[280px] lg:w-[320px] rounded-md border border-gray-300 bg-white pl-4 pr-10 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-navy-600"
            placeholder="输入机构名称"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-brand-navy-600"
            aria-label="搜索机构名称"
            title="搜索机构名称"
          >
            🔍
          </button>
        </form>

        <form
          role="search"
          className="relative h-10"
          onSubmit={(e) => e.preventDefault()}
          aria-label="关键词搜索"
        >
          <input
            className="h-full w-56 md:w-[280px] lg:w-[320px] rounded-md border border-gray-300 bg-white pl-4 pr-10 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-navy-600"
            placeholder="输入关键词"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-brand-navy-600"
            aria-label="搜索关键词"
            title="搜索关键词"
          >
            🔍
          </button>
        </form>
      </div>
    </div>
  )
}

// ---------- 表格组件 ----------
const OrgTable = ({ data = [] }) => {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 shadow-card">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-brand-navy-600 text-white">
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap">编号</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap">机构名称</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap">联系人</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap">电话</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap">类型</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap">状态</th>
              <th className="px-4 py-3 text-center font-medium whitespace-nowrap">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {data.map((row) => (
              <tr key={row.code} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-ink whitespace-nowrap">{row.code}</td>
                <td className="px-4 py-3 text-ink">
                  <span className="block max-w-[720px] truncate">{row.name}</span>
                </td>
                <td className="px-4 py-3 text-ink whitespace-nowrap">{row.contact}</td>
                <td className="px-4 py-3 text-ink whitespace-nowrap">{row.phone}</td>
                <td className="px-4 py-3 text-ink whitespace-nowrap">{row.type}</td>
                <td className="px-4 py-3 text-ink whitespace-nowrap">{row.status}</td>
                <td className="px-4 py-3 text-center whitespace-nowrap">
                  <a href="#" className="text-brand-navy-600 hover:underline">详情</a>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-ink-muted">
                  暂无数据
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ---------- 页面主组件 ----------
const Agencies = () => {
  const [active, setActive] = React.useState('eva')

  const data = active === 'eva' ? evaluationOrgs : consultOrgs

  return (
    <div className="space-y-6">
      {/* 顶部：左 Tabs + 右两个搜索框（同一水平线） */}
      <TabsAndSearch active={active} onChange={setActive} />

      {/* 表格（随 Tab 切换） */}
      <OrgTable data={data} />
    </div>
  )
}

export default Agencies
