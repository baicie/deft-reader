import { describe, it, expect, vi } from 'vitest'
import { calculateFileMD5 } from '@/utils/md5'
import crypto from 'node:crypto'
// Mock the `File` and `Blob` objects
class MockFile extends Blob {
  constructor(chunks: BlobPart[], name: string, options?: BlobPropertyBag) {
    super(chunks, options)
    this.name = name
  }
  name: string
  arrayBuffer() {
    return new Promise<ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as ArrayBuffer)
      reader.onerror = reject
      reader.readAsArrayBuffer(this)
    })
  }
}

describe('calculateFileMD5', () => {
  it('should calculate the correct MD5 hash of a file', async () => {
    // 模拟文件数据
    const content = 'Hello, world!'
    const file = new MockFile([content], 'hello.txt', { type: 'text/plain' })

    // 模拟 crypto.subtle.digest
    const mockDigest = vi
      .spyOn(crypto.subtle, 'digest')
      .mockResolvedValue(new Uint8Array([0x12, 0x34, 0x56, 0x78]).buffer)

    // 计算文件 MD5
    const hash = await calculateFileMD5(file as unknown as File)

    // 验证结果
    expect(hash).toBe('12345678')

    // 恢复原始方法
    mockDigest.mockRestore()
  })
})
