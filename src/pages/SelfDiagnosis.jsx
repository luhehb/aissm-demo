import React from 'react'
import SectionTitle from '../components/SectionTitle.jsx'

const SelfDiagnosis = () => {
  return (
    <div className="space-y-6">
      <SectionTitle title="新建自诊断" subtitle="创建企业自诊断并开始答题" />
      <div className="bg-panel p-4 rounded shadow-card">按钮/卡片占位</div>

      <SectionTitle title="填报须知 / 能力域选择" />
      <div className="bg-panel p-4 rounded shadow-card">说明文本占位</div>

      <SectionTitle title="调查问卷填报" />
      <div className="bg-panel p-4 rounded shadow-card">问卷占位</div>

      <SectionTitle title="自诊断答题" />
      <div className="bg-panel p-4 rounded shadow-card">题卡占位</div>
    </div>
  )
}

export default SelfDiagnosis
