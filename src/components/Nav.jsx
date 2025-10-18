import React from 'react';
import { Home, FileText, Award, Building2, Package, Briefcase, Search } from 'lucide-react';

const Nav = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'self-assessment', label: '企业自评估', icon: FileText },
    { id: 'certificates', label: '证书公示', icon: Award },
    { id: 'agencies', label: '服务机构', icon: Building2 },
    { id: 'catalog', label: '产品目录', icon: Package },
    { id: 'solutions', label: '产品和解决方案', icon: Briefcase }
  ];

  return (
    <nav className="bg-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex">
            {navItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-6 py-4 flex items-center gap-2 transition-colors ${
                    currentPage === item.id 
                      ? 'bg-indigo-800 border-b-4 border-cyan-400' 
                      : 'hover:bg-indigo-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="请输入关键字搜索"
              className="px-4 py-2 pr-10 rounded-full bg-indigo-600 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <Search className="w-5 h-5 absolute right-3 top-2.5 text-indigo-200" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;