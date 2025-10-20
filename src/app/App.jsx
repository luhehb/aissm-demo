// src/app/App.jsx
import React from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { appRoutes } from './routes'
import Topbar from '../components/Topbar.jsx'
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import Breadcrumb from '../components/Breadcrumb.jsx'
import Login from '../pages/Login.jsx'   // 新增：登录页

const AppLayout = ({ children }) => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <div className="min-h-full flex flex-col">
      <div className="bg-brand-navy text-white">
        {/*<Topbar />*/}
        <Header />
        <Navbar />
      </div>
      {!isHome && (
        <div className="border-b border-gray-200">
          <div className="container-1200">
            <Breadcrumb />
          </div>
        </div>
      )}
      <main className="flex-1">
        <div className="container-1200 py-8">{children}</div>
      </main>
      <footer className="bg-panel mt-12 py-8 text-center text-sm text-ink-muted">
        © 2025 aissm-demo (JSX) · 本项目仅用于样式复现演示
      </footer>
    </div>
  )
}

const App = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // 入口登录守卫：未登录强制跳转 /login；已登录访问 /login 则回首页
  React.useEffect(() => {
    const authed = localStorage.getItem('authed') === '1'
    const onLoginPage = location.pathname === '/login'
    if (!authed && !onLoginPage) {
      navigate('/login', { replace: true })
    } else if (authed && onLoginPage) {
      navigate('/', { replace: true })
    }
  }, [location.pathname, navigate])

  const handleLogin = () => {
    localStorage.setItem('authed', '1')  // mock 登录态
    navigate('/')                        // 登录后进入首页
  }

  return (
    <Routes>
      {/* 登录页：不使用站点布局 */}
      <Route path="/login" element={<Login onLogin={handleLogin} />} />

      {/* 其他页面：使用站点布局 */}
      {appRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<AppLayout>{element}</AppLayout>}
        />
      ))}
    </Routes>
  )
}

export default App
