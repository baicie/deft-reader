import { observer } from 'mobx-react-lite'
import { useCallback } from 'react'
import { useLogger } from '../../hooks/use-logger'
import DemoView from './config-view'

export default observer(() => {
  const logger = useLogger()

  const handleClick = useCallback(() => {
    logger.debug('click debug')
    logger.info('click info')
    logger.warn('click warn')
    logger.error('click error')
  }, [logger])

  return <DemoView msg={''} onClick={handleClick} />
})
