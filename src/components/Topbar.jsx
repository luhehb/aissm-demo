// src/components/Topbar.jsx
import React from 'react'
import { Link } from 'react-router-dom'   // 新增

const Topbar = () => {
  return (
    <div className="border-b border-white/10">
      <div className="container-1200 h-10 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span aria-hidden>📍</span>
          <button className="hover:underline focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1">
            全国平台<span className="opacity-80 ml-1">[切换]</span>
          </button>
        </div>
        <div className="flex items-center gap-6">
          <nav className="space-x-3">
            {/* 修改：跳到登录页 */}
            <Link to="/login" className="text-brand-accent hover:underline">立即登录</Link>
            <span aria-hidden>|</span>
            <a href="#" className="hover:underline">注册</a>
          </nav>
          <div className="opacity-90">联系电话：010-64102844</div>
        </div>
      </div>
    </div>
  )
}
export default Topbar
