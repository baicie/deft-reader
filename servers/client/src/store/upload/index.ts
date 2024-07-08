import { deleteFile, getFiles } from '@/service/files'
import type { BookList } from '@/service/files/types'
import { action, makeObservable, observable } from 'mobx'
import { singleton } from 'tsyringe'

@singleton()
export class UploadStore {
  @observable
  public files: BookList = []

  @action
  public async queryUploadList() {
    const res = await getFiles()
    this.files = res
  }

  @action
  public async deleteFile(id: number) {
    try {
      await deleteFile(id)
      await this.queryUploadList()
    } catch (_) {}
  }
  constructor() {
    makeObservable(this)
  }
}
