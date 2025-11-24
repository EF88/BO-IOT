import React, { useEffect, useState } from 'react'
import { cloneDeep } from 'lodash-es'
import {
  Button,
  Drawer,
  Icon,
  Input,
  //   Notifications,
  Typography,
} from '@iot/portal-core-components'
import mocks from './mocks.json'
import historyMocks from './historyMocks.json'
import HistoryFeatureFlags from './HistoryFeatureFlags'
// import { API } from '@/api'
import CreateFeatureFlags from './CreateFeatureFlags'
// import { useAppState } from '@/store'
// import { getChanges } from '@/components/common/FeatureFlags/functions/getChanges'

export type RoleOverrides = Record<string, boolean>

export interface FeatureFlag {
  changes?: any
  name: string
  lastUpdatedBy?: string
  lastUpdatedDate?: string
  lastChanges?: any
  environments: Record<
    string,
    {
      enabled: boolean
      roleOverrides: RoleOverrides
    }
  >
}

const FeatureFlags: React.FC = () => {
  const [flags, setFlags] = useState<FeatureFlag[]>([])
  const [historyFlags, setHistoryFlags] = useState<FeatureFlag[]>([])
  const [selectedEnv, setSelectedEnv] = useState<string>('production')
  const [initialState, setInitialState] = useState<FeatureFlag[]>(
    mocks.features
  )
  //   const {
  //     settings: { userName },
  //   } = useAppState((store) => store.user)

  const [searchTerm, setSearchTerm] = useState('')

  const isDisabled = JSON.stringify(initialState) === JSON.stringify(flags)

  const filteredFeatures = flags.filter((flag: any) =>
    flag.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleFeature = (index: number) => {
    const newFlags = cloneDeep(flags)
    newFlags[index].lastUpdatedBy = 'emanuel.ferreira1@vodafone.com'
    newFlags[index].lastUpdatedDate = new Date().toLocaleString()
    newFlags[index].environments[selectedEnv].enabled =
      !newFlags[index].environments[selectedEnv].enabled
    setFlags(newFlags)
  }

  const toggleRoleOverride = (index: number, role: string) => {
    const newFlags = cloneDeep(flags)
    newFlags[index].lastUpdatedBy = 'emanuel.ferreira1@vodafone.com'
    newFlags[index].lastUpdatedDate = new Date().toLocaleString()
    newFlags[index].environments[selectedEnv].roleOverrides[role] =
      !newFlags[index].environments[selectedEnv].roleOverrides[role]
    setFlags(newFlags)
  }

  //   const updateFeatureFlags = async () => {
  //     const differences = [...getChanges(flags, initialState), ...historyFlags]
  //     try {
  //       await API.patch('featureFlags/v1/overrideFlags', flags)
  //       await API.patch('featureFlags/v1/overrideHistory', differences)
  // setInitialState(flags)
  //       Notifications.add({
  //         title: 'Feature flags',
  //         text: 'Feature flags updated successfully',
  //         type: 'success',
  //       })
  //     } catch (error) {
  //       console.error('Failed to update feature flags:', error)
  //     }
  //   }

  const addFeatureFlag = (newFlag: FeatureFlag) => {
    setFlags([...flags, newFlag])
    setInitialState(flags)
  }

  const deleteFeatureFlags = (newFlag: FeatureFlag) => {
    const updatedFlags = flags.filter((flag: any) => flag.name !== newFlag.name)
    setFlags(updatedFlags)
  }

  const cancelChanges = () => {
    setFlags(initialState)
  }

  useEffect(() => {
    const fetchFeatureFlags = async () => {
      try {
        // const responseFlags = await API.get('featureFlags/v1/flagsList')
        // const responsoHistory = await API.get('featureFlags/v1/historyFlags')
        // setFlags(responseFlags.data.features)
        setInitialState(mocks.features)
        setHistoryFlags(historyMocks.features)
      } catch (error) {
        console.error('Failed to fetch feature flags:', error)
      }
    }

    fetchFeatureFlags()
  }, [])

  const [isCreateVisible, setIsCreateVisible] = useState(false)
  const [isHistoryVisible, setIsHistoryVisible] = useState(false)

  return (
    <div className="p-4">
      <div className="flex flex-row w-full justify-between p-4">
        <h1 className="text-2xl w-full font-bold">Feature Flags Panel</h1>
        <div className="flex gap-1 justify-end w-full items-center">
          <Button
            text="Cancel"
            disabled={isDisabled}
            icon="close"
            ariaLabel="cancel"
            variant="secondary"
            onClick={() => {
              cancelChanges()
            }}
          />
          {/* <Button
            variant="operation"
            disabled={isDisabled}
            text="Update"
            ariaLabel="update"
            size="small-icon"
            icon="Sync"
            onClick={() => updateFeatureFlags()}
          /> */}
          <Button
            text="Create"
            icon="create"
            ariaLabel="open"
            variant="operation"
            onClick={() => {
              setIsCreateVisible(true)
            }}
          />
          <Drawer
            ariaLabel="create-feature-flags"
            drawerSize="medium"
            placement="right"
            open={isCreateVisible}
            onClose={() => setIsCreateVisible(false)}
          >
            <Drawer.Content>
              <CreateFeatureFlags
                setIsVisible={setIsCreateVisible}
                addFeatureFlag={addFeatureFlag}
                onClose={setIsCreateVisible}
                userName={'emanuel.ferreira1@vodafone.com'}
              />
            </Drawer.Content>
          </Drawer>
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
      <div className="mb-8 justify-between flex items-center">
        <div>
          <label htmlFor="environment-select" className="mr-2 font-semibold">
            Environment:
          </label>
          <select
            id="environment-select"
            value={selectedEnv}
            onChange={(e: any) => setSelectedEnv(e.target.value)}
            className="border p-1"
          >
            <option value="production">Production</option>
            <option value="staging">Staging</option>
            <option value="lob">LOB</option>
            <option value="remotedev">Development</option>
            <option value="development">Local</option>
          </select>
        </div>
        <Button
          text="History Flags"
          icon="history"
          ariaLabel="history"
          variant="operation"
          onClick={() => {
            setIsHistoryVisible(true)
          }}
        />
        <Drawer
          ariaLabel="history-feature-flags"
          drawerSize="medium"
          placement="right"
          open={isHistoryVisible}
          onClose={() => setIsHistoryVisible(false)}
        >
          <Drawer.Content>
            <HistoryFeatureFlags
              historyFlags={historyFlags}
              onClose={setIsHistoryVisible}
            />
          </Drawer.Content>
        </Drawer>
      </div>

      {filteredFeatures.map((flag, index) => (
        <div
          key={flag.name}
          className="bg-white mb-4 p-4 border rounded shadow"
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">{flag.name}</h2>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={flag.environments[selectedEnv].enabled}
                onChange={() => toggleFeature(index)}
                className="mr-2"
              />
              <span>
                {flag.environments[selectedEnv].enabled
                  ? 'Enabled'
                  : 'Disabled'}
              </span>
            </label>
          </div>
          <hr className="border-t border-gray-300 w-full my-4" />
          <div className="pl-4">
            <h3 className="font-medium mb-1">Role Overrides:</h3>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(flag.environments[selectedEnv].roleOverrides).map(
                ([role, isEnabled]) => (
                  <label key={role} className="flex items-center mb-1">
                    <input
                      type="checkbox"
                      checked={isEnabled}
                      onChange={() => toggleRoleOverride(index, role)}
                      className="mr-2"
                    />
                    <span>{role}</span>
                  </label>
                )
              )}
            </div>
            <hr className="border-t border-gray-300 w-full my-4" />
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <Icon
                  name="upload"
                  ariaLabel="history"
                  size="sm"
                  className="mr-2"
                />
                <Typography
                  message={`Last updated: ${flag.lastUpdatedDate} by ${flag.lastUpdatedBy}`}
                  ariaLabel="secondary-title"
                  variant="monochrome"
                  size="sm"
                />
              </div>
              <Button
                text="Delete"
                icon="create"
                ariaLabel="delete"
                variant="operation"
                onClick={() => {
                  deleteFeatureFlags(flag)
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeatureFlags
