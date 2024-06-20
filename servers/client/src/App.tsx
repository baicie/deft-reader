import { ConfigProvider } from 'antd'
import enUS from 'antd/lib/locale/en_US'
import frFR from 'antd/lib/locale/fr_FR'
import zhCN from 'antd/lib/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/en'
import 'dayjs/locale/fr'
import 'dayjs/locale/zh-cn'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { I18nextProvider, useTranslation } from 'react-i18next'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { useInjectable } from './hooks/use-di'
import { Config } from './store/config'
import locales from './locales'

export default observer(() => {
  const { i18n } = useTranslation()
  const [antdLocale, setAntdLocale] = useState(enUS)
  const config = useInjectable(Config)

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      // 同步 antd 语言
      switch (lng) {
        case 'fr':
          setAntdLocale(frFR)
          dayjs.locale(lng)
          break
        case 'en':
          setAntdLocale(enUS)
          dayjs.locale(lng)
          break
        case 'cn':
        default:
          setAntdLocale(zhCN)
          dayjs.locale('zh-cn')
          break
      }
    }

    // 初始化时设置语言
    handleLanguageChange(i18n.language)

    // 监听语言变化
    i18n.on('languageChanged', handleLanguageChange)

    return () => {
      i18n.off('languageChanged', handleLanguageChange)
    }
  }, [i18n])

  useEffect(() => {
    config.queryConfig()
  }, [])

  return (
    <ConfigProvider locale={antdLocale}>
      <I18nextProvider i18n={locales}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </ConfigProvider>
  )
})
