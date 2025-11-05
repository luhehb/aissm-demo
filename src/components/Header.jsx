
import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // ① Header 色调：深蓝纵向渐变（可按需微调下面三个 hex）
    <header className="text-white bg-gradient-to-b from-[#0F2441] via-[#1E3A68] to-[#2B4F8A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5">
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* 左侧：品牌（AISMM + 渐变条） + 标题 + 右侧“全国平台[切换]” */}
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-start gap-6">
              {/* AISMM 与下方渐变条：垂直栈叠并居中 */}
              <div className="shrink-0 flex flex-col items-center">
                <div className="text-white font-semibold text-lg lg:text-xl leading-none tracking-wide">
                  AISMM
                </div>
                <div className="mt-2 h-2 w-24 md:w-28 rounded-full bg-gradient-to-r from-cyan-300 via-teal-300 to-indigo-300" />
              </div>

              {/* 标题 + 右侧“全国平台[切换]” */}
              <div className="flex items-start">
                {/* ② 两行主标题：缩小字号；两行固定，居中对齐（以第一行宽度为准） */}
                <div className="leading-snug">
                  <h1 className="font-semibold w-max text-center tracking-wide
                                  text-2xl md:text-3xl lg:text-[34px] xl:text-[36px]">
                    <span className="block">人工智能安全能力成熟度评估</span>
                    <span className="block">评价公共服务平台</span>
                  </h1>
                </div>

                {/*/!* ③ 把“全国平台[切换]”移到两行标题右侧；与标题留 2em 的间距 *!/*/}
                {/*<div className="ml-[2em] mt-1 flex items-center gap-2 text-sm md:text-base font-medium">*/}
                {/*  <MapPin className="w-4 h-4 text-amber-300" />*/}
                {/*  <span>全国平台[切换]</span>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>

          {/* 右侧：登录/注册（保持原位置靠右） */}
          <div className="col-span-12 lg:col-span-4">
            <div className="flex lg:justify-end gap-6 lg:gap-8 text-sm lg:text-base font-medium">
              <div className="flex items-center gap-2">
                <span className="text-amber-300 cursor-pointer hover:text-white transition">立即登录</span>
                {/*<Link to="/login" className="text-amber-300 hover:text-white transition">*/}
                {/*  立即登录*/}
                {/*</Link>*/}
                <span className="opacity-70">|</span>
                <span className="cursor-pointer hover:text-white transition">注册</span>
                {/*<a href="#" className="cursor-pointer hover:text-white transition">注册</a>*/}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 分层细线（可选）：与下方导航做视觉分隔；若已有紫色导航条可省略 */}
      {/* <div className="h-[2px] bg-white/10" /> */}
    </header>
  );
};

export default Header;
