import { action, computed, makeObservable, observable } from 'mobx'
import { singleton } from 'tsyringe'
import { getConfig, updateConfig } from '@/service/config'
import { ConfigType } from '@/service/config/types'

export interface ConigSchema {
  key: string
  type: 'switch' | 'input'
  value?: string | boolean
}

@singleton()
export class Config {
  @observable
  public config: Partial<ConfigType> = {}

  @observable
  public schema: ConigSchema[] = []

  @action
  public async queryConfig() {
    const res = await getConfig()
    this.generateSchema(res)
  }

  private generateSchema(config: ConfigType) {
    this.schema = []
    for (const key of Object.keys(config)) {
      const value = config[key]
      if (typeof value === 'string') {
        this.schema.push({
          key,
          type: 'input',
          value,
        })
      } else if (typeof value === 'boolean') {
        this.schema.push({
          key,
          type: 'switch',
          value,
        })
      }
    }
  }

  public updateLocalConfg(key: string, value: string | boolean) {
    this.config[key] = value
  }

  @action
  public async updateConfig(data: unknown) {
    await updateConfig(data)
    this.queryConfig()
  }

  @computed
  get env() {
    return this.config
  }

  constructor() {
    makeObservable(this)
  }
}
