import React from 'react'
import Home from '../pages/Home.jsx'
import SelfDiagnosis from '../pages/SelfDiagnosis.jsx'
import InfoSearch from '../pages/InfoSearch.jsx'
import Certificate from '../pages/Certificate.jsx'
import Agencies from '../pages/Agencies.jsx'
import ProductCatalog from '../pages/ProductCatalog.jsx'
import Solutions from '../pages/Solutions.jsx'

export const appRoutes = [
  { path: '/', name: '首页', element: <Home /> },
  { path: '/self-diagnosis', name: '企业自诊断', element: <SelfDiagnosis /> },
  // { path: '/info', name: '信息查询', element: <InfoSearch /> },
  { path: '/certificate', name: '证书公示', element: <Certificate /> },
  { path: '/agencies', name: '服务机构', element: <Agencies /> },
  { path: '/products', name: '产品目录', element: <ProductCatalog /> },
  { path: '/solutions', name: '产品和解决方案', element: <Solutions /> },
]
