import { Button, Drawer, Input, Typography } from '@iot/portal-core-components'
import labels from '../mocks/labels.json'
import { flags } from '../helpers/transformTranslations'

export const CreateEdit = ({
  showCreate,
  toggleCreateDrawer,
}: {
  showCreate: boolean
  toggleCreateDrawer: (open: boolean) => void
}) => (
  <Drawer ariaLabel="create" open={showCreate} closable>
    <div className="mt-2 mr-4 flex justify-between mb-4">
      <Button
        icon="close"
        ariaLabel="close-drawer"
        onClick={() => {
          toggleCreateDrawer(false)
        }}
      />
      <Typography
        message="Create/Edit Label"
        ariaLabel="create-title"
        size="xl"
      />
    </div>

    <div className="flex flex-col justify-start mx-4">
      <Typography message="Label" ariaLabel="create-title" className="ml-1" />
      <Input ariaLabel="input-label" />
    </div>

    <div className="flex flex-col justify-start mx-4 mt-8">
      <Typography
        message="Translations"
        ariaLabel="create-title"
        className="ml-1 mb-2"
      />

      {labels.labels.map((language: string) => (
        <div className="flex mb-2 gap-3" key={language}>
          <Typography message={flags[language]} ariaLabel={flags[language]} />
          <Input
            ariaLabel={`input-label-${language}`}
            wrapperClassName="w-full"
          />
        </div>
      ))}
    </div>

    <div className="absolute bottom-2 w-full">
      <Button
        text="save"
        ariaLabel="save"
        variant="primary"
        className="p-2"
        fullWidth
      />
    </div>
  </Drawer>
)
