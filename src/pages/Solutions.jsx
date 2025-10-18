import React from 'react';
import Card from '../components/Card';

const Solutions = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card
        title="企业级 AI 治理解决方案"
        description="为企业提供完整的 AI 安全治理体系，包括模型风险评估、内容安全审核、合规管理等全流程服务"
        className="from-indigo-900 to-blue-900"
        buttons={[
          { label: '了解更多', primary: false }
        ]}
      />

      <Card
        title="AI 安全评估服务"
        description="专业的第三方 AI 安全能力评估服务，帮助企业获取权威认证，提升市场竞争力"
        className="from-purple-900 to-indigo-900"
        buttons={[
          { label: '了解更多', primary: false }
        ]}
      />

      <Card
        title="模型红队测试"
        description="专业的模型安全测试服务，发现潜在风险点，提供针对性的安全加固建议"
        className="from-cyan-900 to-blue-900"
        buttons={[
          { label: '了解更多', primary: false }
        ]}
      />

      <Card
        title="AI 合规咨询"
        description="提供全面的 AI 合规咨询服务，协助企业建立符合监管要求的 AI 治理体系"
        className="from-blue-900 to-indigo-900"
        buttons={[
          { label: '了解更多', primary: false }
        ]}
      />
    </div>
  );
};

export default Solutions;