import React, { useState } from 'react'
import { Spinner, Typography } from '@iot/portal-core-components'

const Dashboard = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="p-4">
      <div>
        <div className="bg-red">
          <Spinner ariaLabel="vodafone-spinner-chart" className="w-12" />
        </div>
      </div>
      <div className="title">
        <Typography ariaLabel="CMS-title" message="IOT CMS" />
      </div>
      <div className="card">
        <button onClick={() => setCount((count: number) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Work in progress. This can be used to have dashboard
      </p>
    </div>
  )
}

export default Dashboard
