import React from 'react'
import { NavLink } from 'react-router-dom'
import { appRoutes } from '../app/routes.jsx'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="bg-brand-navy-600">
      <div className="container-1200 h-14 flex items-center justify-between">
        <button
          className="lg:hidden px-2 py-1 text-white focus:outline-none focus:ring-2 focus:ring-white/60 rounded"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="切换导航"
        >
          ☰
        </button>

        <nav className="hidden lg:flex items-center gap-6" aria-label="主导航">
          {appRoutes.map(r => (
            <NavLink
              key={r.path}
              to={r.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded hover:opacity-90 transition relative ${
                  isActive ? 'text-white' : 'text-white/90'
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {r.name}
                  {isActive && (
                    <span
                      className="absolute left-0 -bottom-[11px] h-[3px] w-full bg-brand-accent rounded"
                      aria-hidden
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex-1 lg:flex-none" />

        {/* Search */}
        <form
          role="search"
          className="hidden md:flex items-center bg-search-bg rounded-full px-3 py-1 shadow-sm"
          onSubmit={e => e.preventDefault()}
        >
          <input
            className="bg-transparent outline-none text-sm w-56"
            placeholder="请输入关键词查询"
            aria-label="站内搜索"
          />
          <button
            type="submit"
            className="ml-1 px-2 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label="搜索"
            title="搜索"
          >
            🔍
          </button>
        </form>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div id="mobile-menu" className="lg:hidden border-t border-white/10">
          <nav className="container-1200 py-2 flex flex-col" aria-label="主导航移动端">
            {appRoutes.map(r => (
              <NavLink
                key={r.path}
                to={r.path}
                className="px-3 py-3 text-white/90 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {r.name}
              </NavLink>
            ))}
            <form
              role="search"
              className="mt-2 flex items-center bg-search-bg rounded-full px-3 py-1 shadow-sm mb-2"
              onSubmit={e => e.preventDefault()}
            >
              <input
                className="bg-transparent outline-none text-sm flex-1"
                placeholder="请输入关键词查询"
                aria-label="站内搜索"
              />
              <button type="submit" className="ml-1 px-2 py-1 rounded-full">🔍</button>
            </form>
          </nav>
        </div>
      )}
    </div>
  )
}

export default Navbar
