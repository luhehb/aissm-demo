import React from 'react'

/**
 * InfoSearch.jsx（紧凑版：Tabs 间距缩小 + 搜索框变短）
 * - 顶部使用 CSS Grid: md:grid-cols-[1fr_auto]，保证左侧 Tabs 与右侧筛选/搜索处于同一行
 * - Tabs 间距：gap-4 md:gap-6；统一 h-10（40px）/ text-base（16px）
 * - 右侧按钮 text-sm（14px）、h-10，搜索框宽度缩短为 w-[360px]（小屏更小）
 * - 点击 4 个 Tab 切换：企业标准符合性证书 / 评价师 / 主任评价师 / 培训讲师（mock 数据）
 */

const TABS = [
  { key: 'cert', label: '企业标准符合性证书' },
  { key: 'eva', label: '评价师' },
  { key: 'chief', label: '主任评价师' },
  { key: 'trainer', label: '培训讲师' },
]

// ---------------- Mock 数据 ----------------
const mockCertificates = [
  {
    code: 'CMMM-075-2025-0001',
    company: '深圳市航嘉驰源电气股份有限公司',
    level: '三级',
    issueDate: '20250929',
    expiryDate: '20270928',
    leader: '肖骏',
    scope: '电源产品的设计与制造（开关电源、适配器等）',
    status: '有效',
  },
  {
    code: 'CMMM-085-2025-0002',
    company: '贵州振华义龙新材料有限公司',
    level: '三级',
    issueDate: '20250929',
    expiryDate: '20280928',
    leader: '王溪',
    scope: '三元锂离子电池材料的研发与生产',
    status: '有效',
  },
  {
    code: 'CMMM-0851-2025-0003',
    company: '贵州振华新材料有限公司',
    level: '三级',
    issueDate: '20250929',
    expiryDate: '20280928',
    leader: '王溪',
    scope: '三元锂离子电池用正极材料的生产',
    status: '有效',
  },
  {
    code: 'CMMM-028-2025-0004',
    company: '四川省钢构智造有限公司',
    level: '二级',
    issueDate: '20250929',
    expiryDate: '20280928',
    leader: '王溪',
    scope: '钢箱梁、钢桁架等钢结构产品的制造',
    status: '有效',
  },
  {
    code: 'CMMM-028-2025-0005',
    company: '成都市某生物制药股份有限公司',
    level: '二级',
    issueDate: '20250929',
    expiryDate: '20280928',
    leader: '王溪',
    scope: '冻干粉针剂的研发、生产与质量控制',
    status: '有效',
  },
  {
    code: 'CMMM-0512-2025-0006',
    company: '江苏亨通光电股份有限公司',
    level: '四级',
    issueDate: '20250929',
    expiryDate: '20270928',
    leader: '赵磊',
    scope: '光缆的设计（含结构设计、工艺设计）与制造',
    status: '有效',
  },
  {
    code: 'CMMM-029-2025-0007',
    company: '西安西电高压开关有限责任公司',
    level: '三级',
    issueDate: '20250929',
    expiryDate: '20280928',
    leader: '高毅',
    scope: '组合电器产品的设计、制造与试验',
    status: '有效',
  },
  {
    code: 'CMMM-010-2025-0008',
    company: '北京某智能装备有限公司',
    level: '三级',
    issueDate: '20250929',
    expiryDate: '20280928',
    leader: '张伟',
    scope: '智能装备控制系统的研发与装配',
    status: '有效',
  },
]

const mockEvaluators = [
  { name: '王溪', level: '评价师', org: '北京某评估机构', certNo: 'PJ-2024-001', region: '全国', status: '有效' },
  { name: '肖骏', level: '评价师', org: '深圳某咨询公司', certNo: 'PJ-2024-002', region: '广东', status: '有效' },
  { name: '高毅', level: '评价师', org: '西安某研究院', certNo: 'PJ-2024-003', region: '陕西', status: '有效' },
  { name: '赵磊', level: '评价师', org: '江苏某光电企业', certNo: 'PJ-2024-004', region: '江苏', status: '有效' },
  { name: '张伟', level: '评价师', org: '北京某智能制造企业', certNo: 'PJ-2024-005', region: '北京', status: '有效' },
]

const mockChiefs = [
  { name: '刘强', level: '主任评价师', org: '中国电子技术标准化研究院', certNo: 'ZP-2024-101', region: '全国', status: '有效' },
  { name: '李娜', level: '主任评价师', org: '上海某工业互联网研究院', certNo: 'ZP-2024-102', region: '上海', status: '有效' },
  { name: '陈凯', level: '主任评价师', org: '广东某评估中心', certNo: 'ZP-2024-103', region: '广东', status: '有效' },
]

const mockTrainers = [
  { name: '周青', level: '培训讲师', org: '北京某培训机构', certNo: 'JS-2024-201', region: '北京', status: '有效' },
  { name: '吴敏', level: '培训讲师', org: '南京某高校继续教育学院', certNo: 'JS-2024-202', region: '江苏', status: '有效' },
  { name: '孙浩', level: '培训讲师', org: '西南某企业大学', certNo: 'JS-2024-203', region: '四川', status: '有效' },
]

// ---------------- 顶部：Tabs + Filters（同一水平线、紧凑间距） ----------------
const TabsAndFilters = ({ active, onChange }) => {
  return (
    <div className="grid md:grid-cols-[1fr_auto] items-center gap-4">
      {/* 左：Tabs（间距更紧凑，overflow 以防极窄时不换行影响右侧） */}
      <div
        className="h-10 flex items-center gap-4 md:gap-6 overflow-x-auto whitespace-nowrap"
        role="tablist"
        aria-label="信息查询类别"
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

      {/* 右：筛选 + 搜索（按钮间距保持不变，搜索框变短） */}
      <div className="h-10 flex items-center justify-end gap-3 shrink-0">
        <button
          type="button"
          className="h-10 px-4 rounded-md border border-gray-300 bg-white text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-navy-600"
        >
          全国
        </button>
        <button
          type="button"
          className="h-10 px-4 rounded-md border border-gray-300 bg-white text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-navy-600"
        >
          选择行业
        </button>
        <button
          type="button"
          className="h-10 px-4 rounded-md border border-gray-300 bg-white text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-navy-600"
        >
          选择级别
        </button>

        <form role="search" onSubmit={(e) => e.preventDefault()} className="relative h-10">
          <input
            type="text"
            placeholder="输入关键词搜索"
            className="h-full w-64 md:w-[320px] lg:w-[360px] rounded-md border border-gray-300 bg-white pl-4 pr-10 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-navy-600"
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
const CertificateTable = () => (
  <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 shadow-card">
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-brand-navy-600 text-white">
            <th className="whitespace-nowrap px-4 py-3 text-left font-medium">证书编号</th>
            <th className="whitespace-nowrap px-4 py-3 text-left font-medium">公司名称</th>
            <th className="whitespace-nowrap px-4 py-3 text-center font-medium">级别</th>
            <th className="whitespace-nowrap px-4 py-3 text-center font-medium">核发时间</th>
            <th className="whitespace-nowrap px-4 py-3 text-center font-medium">有效期至</th>
            <th className="whitespace-nowrap px-4 py-3 text-center font-medium">评估组长</th>
            <th className="whitespace-nowrap px-4 py-3 text-left font-medium">评估范围</th>
            <th className="whitespace-nowrap px-4 py-3 text-center font-medium">证书状态</th>
            <th className="whitespace-nowrap px-4 py-3 text-center font-medium">操作</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {mockCertificates.map((row) => (
            <tr key={row.code} className="hover:bg-gray-50">
              <td className="px-4 py-3 text-ink whitespace-nowrap">{row.code}</td>
              <td className="px-4 py-3 text-ink">{row.company}</td>
              <td className="px-4 py-3 text-center text-ink whitespace-nowrap">{row.level}</td>
              <td className="px-4 py-3 text-center text-ink whitespace-nowrap">{row.issueDate}</td>
              <td className="px-4 py-3 text-center text-ink whitespace-nowrap">{row.expiryDate}</td>
              <td className="px-4 py-3 text-center text-ink whitespace-nowrap">{row.leader}</td>
              <td className="px-4 py-3 text-ink">
                <span className="block max-w-[520px] truncate">{row.scope}</span>
              </td>
              <td className="px-4 py-3 text-center text-ink whitespace-nowrap">{row.status}</td>
              <td className="px-4 py-3 text-center whitespace-nowrap">
                <a href="#" className="text-brand-navy-600 hover:underline">查看</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

const PeopleTable = ({ data = [] }) => (
  <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 shadow-card">
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-brand-navy-600 text-white">
            <th className="px-4 py-3 text-left font-medium whitespace-nowrap">姓名</th>
            <th className="px-4 py-3 text-center font-medium whitespace-nowrap">级别</th>
            <th className="px-4 py-3 text-left font-medium whitespace-nowrap">单位</th>
            <th className="px-4 py-3 text-left font-medium whitespace-nowrap">证书编号</th>
            <th className="px-4 py-3 text-center font-medium whitespace-nowrap">地区</th>
            <th className="px-4 py-3 text-center font-medium whitespace-nowrap">证书状态</th>
            <th className="px-4 py-3 text-center font-medium whitespace-nowrap">操作</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {data.map((e) => (
            <tr key={e.certNo} className="hover:bg-gray-50">
              <td className="px-4 py-3 text-ink whitespace-nowrap">{e.name}</td>
              <td className="px-4 py-3 text-center text-ink whitespace-nowrap">{e.level}</td>
              <td className="px-4 py-3 text-ink">
                <span className="block max-w-[560px] truncate">{e.org}</span>
              </td>
              <td className="px-4 py-3 text-ink whitespace-nowrap">{e.certNo}</td>
              <td className="px-4 py-3 text-center text-ink whitespace-nowrap">{e.region}</td>
              <td className="px-4 py-3 text-center text-ink whitespace-nowrap">{e.status}</td>
              <td className="px-4 py-3 text-center whitespace-nowrap">
                <a href="#" className="text-brand-navy-600 hover:underline">查看</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

// ---------------- 页面主组件 ----------------
const InfoSearch = () => {
  const [active, setActive] = React.useState('cert')

  const renderTable = () => {
    switch (active) {
      case 'cert':
        return <CertificateTable />
      case 'eva':
        return <PeopleTable data={mockEvaluators} />
      case 'chief':
        return <PeopleTable data={mockChiefs} />
      case 'trainer':
        return <PeopleTable data={mockTrainers} />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* 顶部：Tabs + 筛选/搜索（同一水平线、间距紧凑、搜索更短） */}
      <TabsAndFilters active={active} onChange={setActive} />

      {/* 表格内容（随 Tab 切换） */}
      {renderTable()}
    </div>
  )
}

export default InfoSearch
