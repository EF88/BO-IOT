// Panel.tsx
import { ExpandArrow, Switch, Typography } from '@iot/portal-core-components'

const Panel = ({ header, isActive, onPanelClick }: any) => (
  <div className="mb-4 border rounded overflow-hidden shadow">
    <div
      onClick={onPanelClick}
      className={`flex justify-between items-center p-4 cursor-pointer ${
        isActive ? 'bg-silver-chalice text-white' : 'bg-aluminium'
      } transition-all duration-300`}
    >
      <Typography ariaLabel={`ariaLabel${header}`} message={`${header}`} />
      <ExpandArrow size="large" isActive={isActive} ariaLabel={'arrow'} />
    </div>

    {isActive && (
      <div className="p-4 bg-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span>
            <Typography ariaLabel="1" message="DEVELOP" />
          </span>
          <Switch ariaLabel="switch1" />
        </div>
        <div className="flex items-center space-x-4">
          <span>
            <Typography ariaLabel="2" message="LOB" />
          </span>
          <Switch ariaLabel="switch2" />
        </div>
        <div className="flex items-center space-x-4">
          <span>
            <Typography ariaLabel="3" message="STAGING" />
          </span>
          <Switch ariaLabel="switch3" />
        </div>
        <div className="flex items-center space-x-4">
          <span>
            <Typography ariaLabel="4" message="PRODUCTION" />
          </span>
          <Switch ariaLabel="switch4" />
        </div>
      </div>
    )}
  </div>
)

export default Panel
