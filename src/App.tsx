import React, { Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import { routes } from '@/routes'

const App = () => (
  <Router>
    <div className="flex w-screen h-screen">
      {/* Change Sidebar to Sider at Common Components */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1  w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route: any) => (
              <Route
                key={route.key}
                path={route.path}
                element={route.component && <route.component />}
              />
            ))}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  </Router>
)

export default App
