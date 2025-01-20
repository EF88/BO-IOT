import { Button, Typography } from '@iot/portal-core-components'

export const Header = ({
  toggleCreateDrawer,
}: {
  toggleCreateDrawer: (open: boolean) => void
}) => (
  <div className="flex flex-row w-full justify-between">
    <Typography
      message="Translation management"
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
        onClick={() => {
          toggleCreateDrawer(true)
        }}
      />
      <Button
        variant="operation"
        text="upload"
        ariaLabel="create"
        size="small"
        icon="upload"
      />
    </div>
  </div>
)
