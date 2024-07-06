import { observer } from 'mobx-react-lite'
import { useCallback } from 'react'
import { useLogger } from '../../hooks/use-logger'
import DemoView from './log-view'

export default observer(() => {
  const logger = useLogger()

  const handleClick = useCallback(() => {
    logger.debug('click debug')
    logger.info('click info')
    logger.warn('click warn')
    logger.error('click error')
  }, [logger])

  return <DemoView msg={'demo.msg'} onClick={handleClick} />
})
