import React from 'react';
import { Shield } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-cyan-400" />
          <div className="px-3 py-1 bg-cyan-400 rounded-full">
            <span className="text-slate-900 font-bold text-sm">AISMM</span>
          </div>
          <span className="text-sm">人工智能安全能力成熟度评估评价公共服务平台</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span>🌐 全国平台[切换]</span>
          <span>立即登录 | 注册</span>
        </div>
      </div>
    </header>
  );
};

export default Header;