import React from 'react';

const Solutions = () => {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">产品和解决方案</h1>
        <p className="text-slate-600">为企业提供全方位的 AI 安全治理解决方案</p>
      </div>

      {/* SafeWork 产品系列 */}
      <div className="space-y-8">
        {/* SafeWork 介绍 */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 rounded-2xl p-12 text-white">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold mb-6">SafeWork</h2>
            <p className="text-2xl text-blue-100 leading-relaxed">
              解决 AI 从模型到应用的全生命周期各阶段风险问题
            </p>
          </div>
        </div>

        {/* SafeWork T1 和 R1 */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* SafeWork - T1 */}
          <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-900 shadow-2xl">
            {/* 背景装饰 */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

            {/* 顶部图片区域 */}
            <div className="relative h-48 bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur flex items-center justify-center border-b border-white/10">
              <div className="text-6xl font-bold text-white/20">T1</div>
            </div>

            {/* 内容区域 */}
            <div className="relative p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">SafeWork - T1</h3>
              <p className="text-blue-100 leading-relaxed mb-6 min-h-[80px]">
                集合多个独立模块提供端到端模型治理平台，为大模型注入多维度安全治理能力
              </p>

              <div className="pt-4 border-t border-white/10">
                <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 font-medium flex items-center gap-2 group-hover:gap-3">
                  了解更多
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* SafeWork - R1 */}
          <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-900 via-blue-800 to-cyan-900 shadow-2xl">
            {/* 背景装饰 */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

            {/* 顶部图片区域 */}
            <div className="relative h-48 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 backdrop-blur flex items-center justify-center border-b border-white/10">
              <div className="text-6xl font-bold text-white/20">R1</div>
            </div>

            {/* 内容区域 */}
            <div className="relative p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">SafeWork - R1</h3>
              <p className="text-cyan-100 leading-relaxed mb-6 min-h-[80px]">
                通用的安全模型及更安全模型的度量提取，提高更新、数据更正、行为更好、逻辑更可信
              </p>

              <div className="pt-4 border-t border-white/10 flex gap-4">
                <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 font-medium flex items-center gap-2 group-hover:gap-3">
                  了解更多
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-all duration-300 font-medium">
                  即刻体验
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 其他解决方案 */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">企业级 AI 治理</h3>
            <p className="text-slate-600 mb-4 min-h-[60px]">
              为企业提供完整的 AI 安全治理体系，包括模型风险评估、内容安全审核、合规管理等全流程服务
            </p>
            <button className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
              了解更多
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">AI 安全评估</h3>
            <p className="text-slate-600 mb-4 min-h-[60px]">
              专业的第三方 AI 安全能力评估服务，帮助企业获取权威认证，提升市场竞争力
            </p>
            <button className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
              了解更多
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">AI 合规咨询</h3>
            <p className="text-slate-600 mb-4 min-h-[60px]">
              提供全面的 AI 合规咨询服务，协助企业建立符合监管要求的 AI 治理体系
            </p>
            <button className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
              了解更多
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;