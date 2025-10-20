import React from 'react'

/**
 * ProductCatalog.jsx
 * - Tabs：认证产品目录 / 注册产品目录（左侧）
 * - 右侧单个搜索框，与 Tabs 在同一水平线（grid: [1fr auto]）
 * - 点击 Tab 切换两张表格
 * - 列：编号 / 产品名称 / 服务商 / 类型 / 适用范围 / 版本 / 等级 / 核发时间 / 有效期至 / 操作
 * - 全部为 mock 数据
 */

const TABS = [
  { key: 'certified', label: '认证产品目录' },
  { key: 'registered', label: '注册产品目录' },
]

// ---------------- Mock 数据 ----------------
const certifiedProducts = [
  {
    code: 'CMMM-C-2024-001',
    name: 'MEGA ESH CAPA 管理系统',
    provider: '友达智汇智能制造（苏州）有限公司',
    type: '关联评价',
    scope: '安全环保',
    version: 'V1.0.0',
    level: '三级',
    issuedAt: '20240717',
    validTo: '20260716',
  },
  {
    code: 'CMMM-T-2023-001',
    name: '京东物流智能仓储产品',
    provider: '北京京东乾石科技有限公司',
    type: '产品测评',
    scope: '仓储配送',
    version: 'V2.0',
    level: '四级',
    issuedAt: '20231020',
    validTo: '20251019',
  },
  {
    code: 'CMMM-C-2024-002',
    name: 'iFEMS 智慧能源管理系统',
    provider: '艾聚达信息技术（苏州）有限公司',
    type: '关联评价',
    scope: '能源管理',
    version: 'V2.1.0',
    level: '三级',
    issuedAt: '20240717',
    validTo: '20260716',
  },
  {
    code: 'CMMM-T-2023-002',
    name: '京东物流智慧运输管理系统',
    provider: '北京京东乾石科技有限公司',
    type: '产品测评',
    scope: '物流',
    version: 'V3.1',
    level: '四级',
    issuedAt: '20231020',
    validTo: '20251019',
  },
  {
    code: 'MMM-T-2024-003',
    name: '输变电装备数字孪生体建模设计平台',
    provider: '中国电气装备集团科学技术研究院',
    type: '产品测评',
    scope: '产品设计',
    version: 'V1.0',
    level: '三级',
    issuedAt: '20241216',
    validTo: '20261215',
  },
  {
    code: 'CMMM-C-2024-003',
    name: 'EDIT 智训助手系统',
    provider: '艾聚达信息技术（苏州）有限公司',
    type: '关联评价',
    scope: '生产作业',
    version: 'V1.0.0',
    level: '三级',
    issuedAt: '20240717',
    validTo: '20260716',
  },
  {
    code: 'CMMM-T-2023-003',
    name: '天工数联系统',
    provider: '合肥高合信息科技有限公司',
    type: '产品测评',
    scope: '生产作业',
    version: 'V1.0',
    level: '三级',
    issuedAt: '20231020',
    validTo: '20251019',
  },
  {
    code: 'CMMM-T-2025-001',
    name: '鑫泰洋销售管理系统',
    provider: '四川鑫泰洋信息技术服务有限公司',
    type: '产品测评',
    scope: '销售',
    version: 'V1.0',
    level: '二级',
    issuedAt: '20250410',
    validTo: '20270409',
  },
  {
    code: 'CMMM-C-2024-004',
    name: 'GS-LIBS激光光谱分析仪',
    provider: '中国金星智控科技股份有限公司',
    type: '关联评价',
    scope: '装备',
    version: 'GS-L...',
    level: '三级',
    issuedAt: '20241008',
    validTo: '20261007',
  },
]

const registeredProducts = [
  {
    code: 'REG-2024-001',
    name: '制造执行系统（MES）平台',
    provider: '上海某信息技术有限公司',
    type: '注册产品',
    scope: '生产管理',
    version: 'V5.2',
    level: '—',
    issuedAt: '20240512',
    validTo: '—',
  },
  {
    code: 'REG-2024-002',
    name: '工业设备远程诊断系统',
    provider: '深圳某智能科技有限公司',
    type: '注册产品',
    scope: '设备运维',
    version: 'V3.4',
    level: '—',
    issuedAt: '20240608',
    validTo: '—',
  },
  {
    code: 'REG-2024-003',
    name: '工业物联网边缘网关',
    provider: '成都某物联科技有限公司',
    type: '注册产品',
    scope: '边缘计算',
    version: 'V2.1',
    level: '—',
    issuedAt: '20240719',
    validTo: '—',
  },
  {
    code: 'REG-2024-004',
    name: '企业级数据中台',
    provider: '杭州某数据科技有限公司',
    type: '注册产品',
    scope: '数据治理',
    version: 'V1.8',
    level: '—',
    issuedAt: '20240821',
    validTo: '—',
  },
]

// ---------------- 顶部：Tabs + 搜索框（同一水平线） ----------------
const TabsAndSearch = ({ active, onChange }) => {
  return (
    <div className="grid md:grid-cols-[1fr_auto] items-center gap-4">
      {/* 左：Tabs（紧凑间距，统一高度/字号） */}
      <div
        className="h-10 flex items-center gap-4 md:gap-6 overflow-x-auto whitespace-nowrap"
        role="tablist"
        aria-label="产品目录"
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

      {/* 右：单个搜索框（右对齐） */}
      <div className="h-10 flex items-center justify-end gap-4 shrink-0">
        <form
          role="search"
          className="relative h-10"
          onSubmit={(e) => e.preventDefault()}
          aria-label="关键词搜索"
        >
          <input
            className="h-full w-56 md:w-[320px] lg:w-[360px] rounded-md border border-gray-300 bg-white pl-4 pr-10 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-navy-600"
            placeholder="输入关键词搜索"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-brand-navy-600"
            aria-label="搜索"
            title="搜索"
          >
            🔍
          </button>
        </form>
      </div>
    </div>
  )
}

// ---------------- 表格组件 ----------------
const ProductTable = ({ data = [] }) => {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 shadow-card">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-brand-navy-600 text-white">
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap">编号</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap">产品名称</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap">服务商</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap">类型</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap">适用范围</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap">版本</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap">等级</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap">核发时间</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap">有效期至</th>
              <th className="px-4 py-3 text-center font-medium whitespace-nowrap">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {data.map((row) => (
              <tr key={row.code} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-ink whitespace-nowrap">{row.code}</td>
                <td className="px-4 py-3 text-ink">
                  <span className="block max-w-[360px] truncate">{row.name}</span>
                </td>
                <td className="px-4 py-3 text-ink">
                  <span className="block max-w-[360px] truncate">{row.provider}</span>
                </td>
                <td className="px-4 py-3 text-ink whitespace-nowrap">{row.type}</td>
                <td className="px-4 py-3 text-ink whitespace-nowrap">{row.scope}</td>
                <td className="px-4 py-3 text-ink whitespace-nowrap">{row.version}</td>
                <td className="px-4 py-3 text-ink whitespace-nowrap">{row.level}</td>
                <td className="px-4 py-3 text-ink whitespace-nowrap">{row.issuedAt}</td>
                <td className="px-4 py-3 text-ink whitespace-nowrap">{row.validTo}</td>
                <td className="px-4 py-3 text-center whitespace-nowrap">
                  <a href="#" className="text-brand-navy-600 hover:underline mr-3">证书</a>
                  <a href="#" className="text-brand-navy-600 hover:underline">联系我</a>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={10} className="px-4 py-8 text-center text-ink-muted">
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

// ---------------- 页面主组件 ----------------
const ProductCatalog = () => {
  const [active, setActive] = React.useState('certified')
  const data = active === 'certified' ? certifiedProducts : registeredProducts

  return (
    <div className="space-y-6">
      {/* 顶部：左 Tabs + 右搜索框（同一水平线） */}
      <TabsAndSearch active={active} onChange={setActive} />

      {/* 表格（随 Tab 切换） */}
      <ProductTable data={data} />
    </div>
  )
}

export default ProductCatalog
