// src/pages/Home.jsx
import React from "react";
import { CheckCircle2 } from "lucide-react";
import hero from "./assets/home-hero.png"; // 请替换为你的图片路径，或使用 public 目录：src="/your-image.png"

const Home = () => {
  return (
    <main className="w-full">
      <section className="bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* 左侧：文案 */}
            <div className="lg:col-span-6">
              <p className="text-slate-500 dark:text-slate-400 uppercase tracking-wider text-xs">
                演示页面 · MOCK 文案
              </p>

              {/* 标题：在浅底上使用深色，深色主题下切到白色 */}
              <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-white leading-tight">
                AI 安全治理与评估
              </h1>

              {/* 正文：加深到 slate-700；深色主题下为 slate-300 */}
              <p className="mt-5 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base max-w-prose">
                本演示聚焦人工智能系统在研发、部署与运营阶段的安全与合规治理。内容涵盖模型风险识别、
                输出合规审查、数据与权限控制，以及面向关键业务场景的持续监测与评估。页面仅用于说明布局与
                样式，所有数据与文本均为前端 Mock。
              </p>

              {/* 要点：标题词更深，正文为 slate-800；深色下切到浅色 */}
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-slate-600 dark:text-slate-300" />
                  <span className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                    <strong className="text-slate-900 dark:text-white">模型风险识别：</strong>
                    关注越狱提示、提示注入、幻觉与敏感输出的触发条件，结合测试用例与规则策略降低风险暴露。
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-slate-600 dark:text-slate-300" />
                  <span className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                    <strong className="text-slate-900 dark:text-white">内容合规审查：</strong>
                    针对涉政、暴恐、隐私、版权等高风险类别进行自动化与人工复核的联合把关。
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-slate-600 dark:text-slate-300" />
                  <span className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                    <strong className="text-slate-900 dark:text-white">数据与权限治理：</strong>
                    最小化采集与使用，敏感字段脱敏与加密存储，配合细粒度访问控制。
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-slate-600 dark:text-slate-300" />
                  <span className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                    <strong className="text-slate-900 dark:text-white">审计与可追溯：</strong>
                    记录关键行为、版本与策略变更，支持审计取证与责任界定。
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-slate-600 dark:text-slate-300" />
                  <span className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                    <strong className="text-slate-900 dark:text-white">持续评估：</strong>
                    上线前进行安全评估，上线后引入监测与告警闭环，周期性复盘与优化。
                  </span>
                </li>
              </ul>

              {/* 说明文本：在浅底上使用 slate-500；深色下为 slate-400 */}
              <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
                * 本页面仅用于样式与布局演示，数据与文案均为 Mock。
              </p>
            </div>

            {/* 右侧：图片容器（不改变整体色调，仅优化视觉层次） */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700/60 shadow-xl bg-white dark:bg-slate-800">
                  <img
                    src={hero}
                    alt="AI 安全治理相关示意图"
                    className="w-full h-[240px] sm:h-[300px] lg:h-[380px] object-cover"
                  />
                </div>
                {/* 柔和底部光晕：浅色与深色分别处理 */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-x-6 -bottom-6 h-24 blur-2xl opacity-30 rounded-full -z-10 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
