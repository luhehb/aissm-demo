import React from "react";
import { ArrowRight } from "lucide-react";


const gradients = {
  T1: "linear-gradient(135deg, rgba(240,200,145,.9) 0%, rgba(69,98,171,.95) 55%, rgba(25,36,70,1) 100%)",
  R1: "linear-gradient(135deg, rgba(32,148,243,1) 0%, rgba(14,33,74,1) 60%)",
  E1: "linear-gradient(135deg, rgba(36,38,106,1) 0%, rgba(110,115,245,0.85) 60%)",
  F1: "linear-gradient(135deg, rgba(28,141,134,1) 0%, rgba(10,27,58,1) 60%)",
};

const cards = [
  {
    key: "T1",
    title: "SafeWork - T1",
    desc:
      "多模态大模型的安全推理训练加速器：在同一系统内并行训练/推理/验证，灵活接入各类安全与价值检验器，提升效率与易用性。",
    ctas: ["了解更多"],
  },
  {
    key: "R1",
    title: "SafeWork - R1",
    desc:
      "基于 SafeLadder 的内生安全推理模型，让安全与能力协同进化；在安全基准与通用推理/多模态评测中取得显著提升。",
    ctas: ["了解更多", "即刻体验"],
  },
  {
    key: "E1",
    title: "SafeWork - E1",
    desc:
      "清洁能源领域的可控可信基座模型：融合行业知识与安全能力，作为智能化改造的安全阈值与可信底座。",
    ctas: ["了解更多"],
  },
  {
    key: "F1",
    title: "SafeWork - F1",
    desc:
      "前沿人工智能风险管理框架与实践：构建评估、度量、缓解与治理闭环，形成面向全生命周期的风险管理范式。",
    ctas: ["了解更多"],
  },
];

const Solutions = () => {
  return (

    <main className="w-full min-h-screen bg-white text-black">
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* 左侧标题区 */}
            <div className="lg:col-span-4">
              <h1 className="text-4xl md:text-5xl font-semibold">SafeWork</h1>
              <div className="mt-4 h-[2px] w-24 bg-white/40" />
              <p className="mt-6 text-base leading-7 text-black/70">
                解决 AI 从理论到应用的全生命周期中各阶段风险
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cards.map((c) => (
                  <article
                    key={c.key}

                    className="relative rounded-xl overflow-hidden border border-white/10 bg-black/80 transition-shadow hover:ring-2 hover:ring-[#86B6FF]"
                  >
                    <div
                      className="h-[140px] md:h-[170px] lg:h-[190px]"
                      style={{ background: gradients[c.key] }}
                    />

                    {/* 文案 + 操作 */}
                    <div className="p-5 md:p-6 border-t border-white/10">
                      <h3 className="text-xl font-semibold text-white">{c.title}</h3>
                      <p className="mt-2 text-sm md:text-base leading-7 text-white/80">
                        {c.desc}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {c.ctas.map((label) => (
                          <button
                            key={label}
                            type="button"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm
                                       text-white/85 border border-white/30 hover:text-white hover:border-white/60 transition-colors"
                            onClick={() => {}}
                          >
                            {label}
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Solutions;
