import { observer } from 'mobx-react-lite'
import { useCallback } from 'react'
import ConfigView from './config-view'
import { useInjectable } from '@/hooks/use-di'
import { Config } from '@/store/config'
import { useTranslation } from 'react-i18next'

export default observer(() => {
  const config = useInjectable(Config)
  const { t } = useTranslation()

  const handleChange = useCallback(
    (key: string, value: string | boolean) => {
      config.updateLocalConfg(key, value)
    },
    [config],
  )

  const handleClick = useCallback(() => {
    config.updateConfig(config.config)
  }, [config])

  return (
    <ConfigView
      schema={config.schema}
      onChange={handleChange}
      onClick={handleClick}
      t={t}
    />
  )
})
