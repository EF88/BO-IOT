import React from 'react'
import { Button, Typography } from '@iot/portal-core-components'
import { FeatureFlag } from './Body'

interface HistoryFeatureFlagsProps {
  historyFlags: FeatureFlag[]
  onClose: (isClosed: boolean) => void
}

const HistoryFeatureFlags: React.FC<HistoryFeatureFlagsProps> = ({
  historyFlags,
  onClose,
}) => (
  <div>
    <div className="p-4 flex flex-row justify-between items-start">
      <Typography
        className="mb-4"
        message="Feature Flags History"
        ariaLabel="history-feature-flag"
      />
      <Button
        text="Close"
        icon="close"
        ariaLabel="close"
        variant="simple"
        onClick={() => onClose(false)}
      />
    </div>
    <ul>
      {historyFlags.map((flag, index) => (
        <li key={index} className="mb-4 p-4 border rounded shadow">
          <p>
            <strong>Feature changed:</strong> {flag.name}
          </p>
          <p>
            <strong>Changed by:</strong> {flag.lastUpdatedBy}
          </p>
          <p>
            <strong>Changed on:</strong> {flag.lastUpdatedDate}
          </p>
          <p>
            <strong>Environments:</strong>
          </p>
          <ul>
            {Object.entries(flag.environments).map(([env, details]) => (
              <li key={env}>
                {env}: {details.enabled ? 'Enabled' : 'Disabled'}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
)

export default HistoryFeatureFlags
