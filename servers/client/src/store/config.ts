import { action, computed, makeObservable, observable } from 'mobx'
import { singleton } from 'tsyringe'
import { getConfig } from '@/service/config'

@singleton()
export class Config {
  @observable
  public config = {}

  @action
  public async queryConfig() {
    const res = await getConfig()
    this.config = res
  }

  @computed
  get env() {
    return this.config
  }

  constructor() {
    makeObservable(this)
  }
}
