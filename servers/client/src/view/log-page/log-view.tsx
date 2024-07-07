import type { ReactElement } from 'react'
import styles from './log.module.scss'
import { DatePicker, Empty, Flex, Timeline, TimelineProps } from 'antd'
import dayjs from 'dayjs'

interface Props {
  items: TimelineProps['items']
  onChange: (date: dayjs.Dayjs) => void
  defaultValue: dayjs.Dayjs
}

const LogView = ({ items, onChange, defaultValue }: Props): ReactElement => (
  <Flex vertical gap="middle">
    <DatePicker
      defaultValue={defaultValue}
      className={styles.date}
      onChange={onChange}
    />

    {items?.length === 0 ? <Empty /> : <Timeline items={items} />}
  </Flex>
)
export default LogView
