import type { ReactElement } from 'react'
import type { TFunction } from 'i18next'
import styles from './overview.module.scss'

interface Props {
  msg: string
  onClick: () => void
  t: TFunction
}

const DemoView = ({ msg, onClick, t }: Props): ReactElement => (
  <div>
    <h1>{t('demo.Welcome to React')}</h1>
    <h1 className={styles.text}>{msg}</h1>
    <button type="button" className={styles.button} onClick={onClick}>
      click
    </button>
  </div>
)
export default DemoView
