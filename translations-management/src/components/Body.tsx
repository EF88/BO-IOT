import { Collapse, List } from 'antd'
import { Icon, Typography } from '@iot/portal-core-components'
import { useLabels } from '../hooks/useLabels'
import { displayTranslation } from '../helpers/transformTranslations'

export const Body = () => {
  const {
    data,
    isFetching,
    error,
  }: {
    data?: Record<string, Record<string, string>>
    isFetching: boolean
    error: any
  } = useLabels()
  const { Panel } = Collapse
  console.log(data)

  if (isFetching || !data) {
    return <Typography message="loading" ariaLabel="loading" size="2xl" />
  }
  if (error) {
    return (
      <Typography message="unexpected error" ariaLabel="error" size="2xl" />
    )
  }
  const enData = data?.en

  return (
    <div className="overflow-scroll p-4 mt-6">
      <Collapse className="grid grid-cols-3 grid-flow-row gap-x-6 ">
        {Object.keys(enData)?.map((label: any) => (
          <Panel
            header={label}
            key={label}
            className="break-all"
            extra={
              <Icon
                name="edit"
                ariaLabel="edit"
                onClick={() => {
                  console.log('aqui', label)
                }}
              />
            }
          >
            <List
              dataSource={Object.keys(data).map((language: string) =>
                displayTranslation(data[language][label], language)
              )}
              renderItem={(item: string) => (
                <List.Item>
                  <Typography
                    ariaLabel={item}
                    className="break-all"
                    message={item}
                  />
                </List.Item>
              )}
            />
          </Panel>
        ))}
      </Collapse>
    </div>
  )
}
