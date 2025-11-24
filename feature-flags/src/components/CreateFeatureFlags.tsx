import React, { useState } from 'react'
import { Button, Input, Typography } from '@iot/portal-core-components'
import { isEmpty } from 'lodash-es'

interface CreateFeatureFlagsProps {
  setIsVisible: (isVisible: boolean) => void
  addFeatureFlag: (newFlag: FeatureFlag) => void
  onClose: (isClosed: boolean) => void
  userName?: string
}

interface FeatureFlag {
  name: string
  lastUpdatedBy: string | undefined
  lastUpdatedDate: string
  environments: Record<
    string,
    {
      enabled: boolean
      roleOverrides: Record<string, boolean>
    }
  >
}

const CreateFeatureFlags: React.FC<CreateFeatureFlagsProps> = (props) => {
  const { setIsVisible, addFeatureFlag, onClose } = props

  const [name, setName] = useState('')
  const [enabled, setEnabled] = useState(false)
  const [roleOverrides, setRoleOverrides] = useState<Record<string, boolean>>({
    PLATFORM_ADMINISTRATOR: true,
    RESELLER: true,
    OPCOGROUP: true,
    CUSTOMERGROUP: true,
    SUBCUSTOMER: true,
    OPCO: true,
    CUSTOMER: true,
  })

  const handleRoleChange = (role: string) => {
    setRoleOverrides({
      ...roleOverrides,
      [role]: !roleOverrides[role],
    })
  }

  const handleSubmit = () => {
    const flagsContent = {
      enabled,
      roleOverrides,
    }
    const newFlag: FeatureFlag = {
      name,
      lastUpdatedBy: 'emanuel.ferreira1@vodafone.com',
      lastUpdatedDate: new Date().toLocaleString(),
      environments: {
        production: flagsContent,
        staging: flagsContent,
        lob: flagsContent,
        remotedev: flagsContent,
        development: flagsContent,
      },
    }
    addFeatureFlag(newFlag)
    setIsVisible(false)
  }

  const inputValidator = () => {
    if (!/^IP2-(?:[a-zA-Z0-9]+-)+[a-zA-Z0-9]+$/.test(name)) {
      return 'Name must start with IP2- and follow the pattern IP2-XXXX-XXXX with letters and numbers only'
    }
    if (/\s/.test(name)) {
      return 'Spaces are not allowed'
    }
    return ''
  }

  const createButtonDisabled =
    !name || name.includes(' ') || !isEmpty(inputValidator())

  return (
    <>
      <div className="flex flex-row justify-between items-start">
        <Typography
          className="mb-4"
          message="Create New Feature Flag"
          ariaLabel="create-feature-flag"
        />
        <Button
          text="Close"
          icon="close"
          ariaLabel="close"
          variant="simple"
          onClick={() => onClose(false)}
        />
      </div>
      <div className="mb-4">
        <Input
          ariaLabel="feature-name"
          type="text"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          placeholder="Feature name"
          className="p-2 border rounded"
        />
        <Typography
          size="sm"
          variant="error"
          className="text-right !inline"
          message={inputValidator()}
          ariaLabel="report-name-edit-error"
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
            className="mr-2"
          />
          <span>Enabled</span>
        </label>
      </div>
      <div className="mb-4">
        <h3 className="font-medium mb-1">Role Overrides:</h3>
        <div className="grid grid-cols-3 gap-4">
          {Object.keys(roleOverrides).map((role) => (
            <label key={role} className="flex items-center mb-1">
              <input
                type="checkbox"
                checked={roleOverrides[role]}
                onChange={() => handleRoleChange(role)}
                className="mr-2"
              />
              <span>{role}</span>
            </label>
          ))}
        </div>
      </div>
      <Button
        text="Create"
        icon="create"
        ariaLabel="create"
        variant="operation"
        onClick={handleSubmit}
        disabled={createButtonDisabled}
      />
    </>
  )
}

export default CreateFeatureFlags
