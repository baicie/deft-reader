import { Config, ConigSchema } from '@/store/config'
import { getConfig, updateConfig } from '@/service/config'
import { Mock } from 'vitest'

vi.mock('@/service/config', () => ({
  getConfig: vi.fn(),
  updateConfig: vi.fn(),
}))

describe('Config', () => {
  let config: Config

  beforeEach(() => {
    config = new Config()
    vi.spyOn(config, 'queryConfig')
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should query config and generate schema', async () => {
    const mockConfig = {
      key1: 'value1',
      key2: true,
    }
    const mockSchema: ConigSchema[] = [
      {
        key: 'key1',
        type: 'input',
        value: 'value1',
      },
      {
        key: 'key2',
        type: 'switch',
        value: true,
      },
    ]
    ;(getConfig as Mock).mockResolvedValue(mockConfig)

    await config.queryConfig()

    expect(getConfig).toHaveBeenCalledTimes(1)
    expect(config.schema).toEqual(mockSchema)
  })

  it('should update local config', () => {
    const key = 'key1'
    const value = 'new value'

    config.updateLocalConfg(key, value)

    expect(config.config[key]).toEqual(value)
  })

  it('should update config and query again', async () => {
    const mockData = { key1: 'new value' }
    ;(updateConfig as Mock).mockResolvedValue(mockData)

    await config.updateConfig(mockData)

    expect(updateConfig).toHaveBeenCalledWith(mockData)
    expect(config.queryConfig).toHaveBeenCalledTimes(1)
  })

  it('should return the config as env', () => {
    const mockConfig = {
      key1: 'value1',
      key2: true,
    }
    config.config = mockConfig

    expect(config.env).toEqual(mockConfig)
  })
})
