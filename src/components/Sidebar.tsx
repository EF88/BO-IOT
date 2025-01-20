import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@iot/portal-core-components'
import { RouteProps, routes } from '@/routes'

const Sidebar = () => (
  <div className="w-48 bg-white-two text-white p-4 text-center">
    <Typography
      className="p-3"
      ariaLabel="sidebar-title"
      size="xl"
      message="IoT CMS"
      iconStart="vodafoneLogo"
    />
    <ul
      className="list-none space-y-4 pt-6"
      style={{ borderTop: '1px solid #ccc' }}
    >
      {routes.map((route: RouteProps) => (
        <li key={route.key}>
          <Link
            to={route.path}
            className="sidebar-link text-gray-800 hover:text-gray-600 w-full text-left"
          >
            <Typography ariaLabel={`${route.title}`} message={route.title} />
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default Sidebar
