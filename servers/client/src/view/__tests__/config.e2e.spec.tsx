import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ConfigView from '../config/config-view'
import { ConigSchema } from '@/store/config'
import { TFunction } from 'i18next'

describe('ConfigView E2E Test', () => {
  const mockSchema: ConigSchema[] = [
    { key: 'username', type: 'input', value: 'testuser' },
    { key: 'notifications', type: 'switch', value: true },
  ]

  const mockOnChange = vi.fn()
  const mockOnClick = vi.fn()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const mockT: TFunction<'translation', undefined> = (key) => key

  it('should render and handle user interactions', () => {
    render(
      <ConfigView
        schema={mockSchema}
        onChange={mockOnChange}
        onClick={mockOnClick}
        t={mockT}
      />,
    )

    // 验证输入框
    const input = screen.getByDisplayValue('testuser')
    fireEvent.change(input, { target: { value: 'newuser' } })
    expect(mockOnChange).toHaveBeenCalledWith('username', 'newuser')

    // 验证开关
    const switchElement = screen.getByRole('switch')
    fireEvent.click(switchElement)
    expect(mockOnChange).toHaveBeenCalledWith('notifications', false)

    // 验证按钮点击
    const button = screen.getByText('config.save')
    fireEvent.click(button)
    expect(mockOnClick).toHaveBeenCalled()
  })
})
