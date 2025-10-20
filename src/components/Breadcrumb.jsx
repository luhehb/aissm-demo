import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { appRoutes } from '../app/routes.jsx'

const mapPathToName = (pathname) => {
  const found = appRoutes.find(r => r.path === pathname)
  if (found) return found.name
  return '未命名'
}

const Breadcrumb = () => {
  const location = useLocation()
  const path = location.pathname
  const isHome = path === '/'
  return (
    <nav className="py-3 text-sm" aria-label="面包屑">
      {isHome ? (
        <span className="text-ink-muted">首页</span>
      ) : (
        <>
          <Link to="/" className="text-brand-navy hover:underline">首页</Link>
          <span className="mx-2 text-ink-muted">›</span>
          <span className="text-ink">{mapPathToName(path)}</span>
        </>
      )}
    </nav>
  )
}

export default Breadcrumb
