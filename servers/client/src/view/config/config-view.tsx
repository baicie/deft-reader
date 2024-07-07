import type { ReactElement } from 'react'
import styles from './config.module.scss'
import { Button, Flex, Form, Input, Switch } from 'antd'
import { ConigSchema } from '@/store/config'

interface Props {
  schema: ConigSchema[]
  onChange: (key: string, value: string | boolean) => void
  onClick: () => void
}

const ConfigView = ({ schema, onChange, onClick }: Props): ReactElement => (
  <Flex vertical gap="middle">
    <Form labelAlign="left" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
      {schema.map((item) => {
        return (
          <Form.Item key={item.key} label={item.key} className={styles.item}>
            {item.type === 'input' ? (
              <Input
                className={styles.input}
                onChange={(e) => onChange(item.key, e.target.value)}
                defaultValue={item.value as string}
              />
            ) : (
              <Switch
                onChange={(checked) => onChange(item.key, checked)}
                defaultValue={item.value as boolean}
              />
            )}
          </Form.Item>
        )
      })}
    </Form>

    <Button className={styles.button} type="primary" onClick={onClick}>
      Submit
    </Button>
  </Flex>
)
export default ConfigView
