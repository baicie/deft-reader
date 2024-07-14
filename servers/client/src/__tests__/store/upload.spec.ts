import { UploadStore } from '@/store/upload'
import { getFiles, deleteFile } from '@/service/files'
import { Mock } from 'vitest'

vi.mock('@/service/files', () => ({
  getFiles: vi.fn(),
  deleteFile: vi.fn(),
}))

describe('UploadStore', () => {
  let uploadStore: UploadStore

  beforeEach(() => {
    uploadStore = new UploadStore()
    vi.spyOn(uploadStore, 'queryUploadList')
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should query upload list and update files', async () => {
    const mockFiles = [
      { id: 1, name: 'file1.pdf' },
      { id: 2, name: 'file2.pdf' },
    ]
    ;(getFiles as Mock).mockResolvedValue(mockFiles)

    await uploadStore.queryUploadList()

    expect(getFiles).toHaveBeenCalledTimes(1)
    expect(uploadStore.files).toEqual(mockFiles)
  })

  it('should delete file and query upload list again', async () => {
    const fileId = 1

    await uploadStore.deleteFile(fileId)

    expect(deleteFile).toHaveBeenCalledWith(fileId)
    expect(uploadStore.queryUploadList).toHaveBeenCalledTimes(1)
  })
})
