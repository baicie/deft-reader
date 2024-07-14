import { describe, it, expect, beforeAll } from 'vitest'
import i18n from '@/locales'

describe('i18n', () => {
  beforeAll(() => {
    i18n.changeLanguage('en')
  })

  it('should translate key correctly', () => {
    expect(i18n.t('layout.language')).toBe('English')
  })

  it('should switch languages correctly', async () => {
    await i18n.changeLanguage('cn')
    expect(i18n.t('layout.language')).toBe('中文')
  })
})
