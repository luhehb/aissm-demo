// src/pages/Login.jsx
import React from 'react';
import { Shield } from 'lucide-react';

const Login = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-cyan-400" />
            <div className="px-4 py-1 bg-cyan-400 rounded-full">
              <span className="text-slate-900 font-bold">AISMM</span>
            </div>
          </div>
          <h1 className="text-2xl text-white font-medium">人工智能安全能力成熟度评估</h1>
          <h2 className="text-xl text-white font-medium">评价公共服务平台</h2>
        </div>

        <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl shadow-2xl">
          <input
            type="text"
            placeholder="请输入用户名或统一社会信用代码"
            className="w-full px-4 py-3 bg-slate-700/50 text-white rounded-lg mb-4 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="password"
            placeholder="请输入密码"
            className="w-full px-4 py-3 bg-slate-700/50 text-white rounded-lg mb-4 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="请输入图片验证码"
              className="flex-1 px-4 py-3 bg-slate-700/50 text-white rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center font-bold text-lg tracking-wider">
              DPHM
            </div>
          </div>

          <div className="flex items-center justify-between mb-6 text-sm">
            <label className="flex items-center text-slate-300">
              <input type="checkbox" className="mr-2" />
              记住账号
            </label>
            <a href="#" className="text-orange-400 hover:text-orange-300">忘记密码</a>
          </div>

          <button
            onClick={onLogin}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            登 录
          </button>

          <div className="text-center mt-4 text-sm text-slate-400">
            <a href="#" className="hover:text-slate-300">立即注册</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-slate-300">返回首页</a>
          </div>

          <p className="text-xs text-center mt-6 text-slate-400">
            建议使用Chrome浏览器
          </p>
        </div>

        <div className="mt-6 space-y-2 text-center text-xs">
          <p className="text-red-400">
            若忘记账户名或密码，请点击"忘记密码"通过企业邮箱一社会信用代码找回密码。
          </p>
          <p className="text-red-400">
            严禁在平台中存储、处理涉密及敏感信息，违者依纪依法处理并承担全部后果。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
