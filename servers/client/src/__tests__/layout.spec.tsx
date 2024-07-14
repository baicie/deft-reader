import DeftLayout from '@/layout'
import i18n from '@/locales'
import { act, fireEvent, render, waitFor } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'

describe('DeftLayout', () => {
  it('should render DeftLayout with menu items', async () => {
    const res = render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <DeftLayout />
        </BrowserRouter>
      </I18nextProvider>,
    )

    // 等待菜单项出现
    await waitFor(
      () => {
        expect(res.getByText(/Books/i)).toBeInTheDocument()
        expect(res.getByText(/Config/i)).toBeInTheDocument()
        expect(res.getByText(/Log/i)).toBeInTheDocument()
      },
      { timeout: 6000 },
    )
  })

  it('should toggle the sidebar', async () => {
    const res = render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <DeftLayout />
        </BrowserRouter>
      </I18nextProvider>,
    )

    const toggleButton = res.getByTestId('toggle-sidebar-button')
    await act(async () => {
      fireEvent.click(toggleButton)
    })
  })

  it('should change language on dropdown item click', async () => {
    const res = render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <DeftLayout />
        </BrowserRouter>
      </I18nextProvider>,
    )

    // 等待语言切换按钮出现
    await waitFor(
      () => {
        const languageDropdown = res.getByTestId('toggle-i18n-button')
        expect(languageDropdown).toBeInTheDocument()

        act(() => {
          fireEvent.click(languageDropdown)
        })
      },
      { timeout: 6000 },
    )

    // 等待 English 选项出现并点击
    await waitFor(
      () => {
        const englishOption = res.getByText(/English/i)
        expect(englishOption).toBeInTheDocument()

        act(() => {
          fireEvent.click(englishOption)
        })
      },
      { timeout: 6000 },
    )

    // 验证语言切换后的效果
    expect(i18n.language).toBe('en-US')
  })
})
