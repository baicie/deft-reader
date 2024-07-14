import { describe, it, expect, beforeEach, vi, Mock } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { observer } from 'mobx-react-lite'
import { useCallback } from 'react'
import { useInjectable } from '@/hooks/use-di'
import { Config } from '@/store/config'
import { useTranslation } from 'react-i18next'
import ConfigView from '@/view/config/config-view'

// Mocking dependencies
vi.mock('@/hooks/use-di')
vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}))

// Mock Config class
class MockConfig {
  schema = [
    { key: 'setting1', type: 'input', value: 'default value' },
    { key: 'setting2', type: 'switch', value: true },
  ]
  updateLocalConfg = vi.fn()
  updateConfig = vi.fn()
}

const MockConfigInstance = new MockConfig()
;(useInjectable as Mock).mockReturnValue(MockConfigInstance)

const MockConfigView = observer(() => {
  const config = useInjectable(Config)
  const { t } = useTranslation()

  const handleChange = useCallback(
    (key: string, value: string | boolean) => {
      config.updateLocalConfg(key, value)
    },
    [config],
  )

  const handleClick = useCallback(() => {
    config.updateConfig(config.config)
  }, [config])

  return (
    <ConfigView
      schema={config.schema}
      onChange={handleChange}
      onClick={handleClick}
      t={t}
    />
  )
})

describe('ConfigView Component', () => {
  beforeEach(() => {
    render(<MockConfigView />)
  })

  it('should render the config view with schema items', () => {
    expect(screen.getByLabelText('setting1')).toBeInTheDocument()
    expect(screen.getByLabelText('setting2')).toBeInTheDocument()
  })

  it('should update local config on input change', () => {
    const input = screen.getByLabelText('setting1')
    fireEvent.change(input, { target: { value: 'New Value' } })
    expect(MockConfigInstance.updateLocalConfg).toHaveBeenCalledWith(
      'setting1',
      'New Value',
    )
  })

  it('should update config on button click', () => {
    const button = screen.getByText('config.save')
    fireEvent.click(button)
    expect(MockConfigInstance.updateConfig).toHaveBeenCalled()
  })
})
