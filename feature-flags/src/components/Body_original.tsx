import { useState } from 'react'
import { Button, Input, Typography } from '@iot/portal-core-components'
import flags from '../mocks/mocks.json'
import Collapse from './Collapse'
import Panel from './Panel'

export const Body = () => {
  const { features } = flags
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (key: any) => {
    console.log(`Panel ${key} was clicked!`)
  }

  const filteredFeatures = features.filter((feature: string) =>
    feature.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-4">
      <div className="flex flex-row w-full justify-between p-4">
        <Typography
          message="Feature Flags"
          ariaLabel="title"
          size="2xl"
          variant="action"
        />
        <div className="flex gap-1">
          <Button
            variant="operation"
            text="create"
            ariaLabel="create"
            size="small"
            icon="create"
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="mb-4">
        <Input
          ariaLabel="input-search"
          type="text"
          value={searchTerm}
          onChange={(e: any) => setSearchTerm(e.target.value)}
          placeholder="Find feature flag..."
          className="p-2 border rounded"
        />
      </div>
      <Collapse defaultActiveKey="1" onChange={handleChange}>
        {filteredFeatures.map((flag: string, index: number) => (
          <Panel key={index} panelKey={index.toString()} header={flag} />
        ))}
      </Collapse>
    </div>
  )
}
