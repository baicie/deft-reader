import { registerGlobalModules } from '@/di'
import { useInjectable } from '@/hooks/use-di'
import { useLogger } from '@/hooks/use-logger'
import { validateFile } from '@/service/files'
import { UploadStore } from '@/store/upload'
import { calculateFileMD5 } from '@/utils/md5'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { App } from 'antd'
import dayjs from 'dayjs'
import i18n from 'i18next'
import { observer } from 'mobx-react-lite'
import { initReactI18next, useTranslation } from 'react-i18next'
import { expect } from 'vitest'
import BookView from '../books/books-view'

registerGlobalModules()

// 初始化 i18next
i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        'Book 1': 'Book 1',
        'upload complete': 'upload complete',
        // 添加其他需要的翻译
      },
    },
  },
})

// 模拟 window.getComputedStyle
window.getComputedStyle = (elt) => {
  return {
    getPropertyValue: (prop) => {
      return ''
    },
  }
}

const MockedBookView = observer(() => {
  const { t } = useTranslation()
  const upload = useInjectable(UploadStore)
  const logger = useLogger()
  const { message, modal } = App.useApp()

  const columns = [
    { title: t('upload.name'), dataIndex: 'bookName', key: 'bookName' },
    { title: t('upload.size'), dataIndex: 'size', key: 'size' },
    {
      title: t('upload.createTime'),
      dataIndex: 'uploadedAt',
      key: 'uploadedAt',
      render: (
        value: string | number | Date | dayjs.Dayjs | null | undefined,
      ) => dayjs(value).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: t('upload.updateTime'),
      dataIndex: 'updateTime',
      key: 'updateTime',
      render: (
        value: string | number | Date | dayjs.Dayjs | null | undefined,
      ) => dayjs(value).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: t('upload.actions'),
      key: 'actions',
      render: (_: any, _record: any) => <span>{t('upload.delete')}</span>,
    },
  ]

  const uploadProps = {
    name: 'file',
    multiple: true,
    action: '/api/upload',
    showUploadList: false,
    onChange(info: { file: { name?: any; status?: any } }) {
      const { status } = info.file
      if (status === 'done') {
        message.success(
          t('upload.upload.success', { filename: info.file.name }),
        )
        upload.queryUploadList()
      } else if (status === 'error') {
        message.error(t('upload.upload.failed', { filename: info.file.name }))
      }
    },
    async beforeUpload(file: File) {
      let res = false
      try {
        const md5 = await calculateFileMD5(file)
        res = await validateFile(md5)
        if (res) {
          logger.error(t('upload.upload.error'))
        } else {
          res = await modal.confirm({
            title: t('upload.upload.confirm.title'),
            content: t('upload.upload.confirm.description'),
            okText: t('upload.upload.confirm.okText'),
            cancelText: t('upload.upload.confirm.cancelText'),
            type: 'warning',
            centered: true,
          })
        }
      } catch (_e) {
        logger.error(t('upload.upload.error'))
        res = false
      }
      return res
    },
  }

  return (
    <BookView
      t={t}
      columns={columns}
      data={upload.files}
      pagination={{}}
      uploadProps={uploadProps}
    />
  )
})

test('renders BookView and uploads file', async () => {
  render(<MockedBookView />)

  // 使用函数匹配器查找包含 "Book 1" 的元素
  //   const bookElement = await screen.findByText(/Book 1/i)

  //   expect(bookElement).toBeInTheDocument()

  // 模拟文件上传
  const file = new File(['dummy content'], 'example.txt', {
    type: 'text/plain',
  })
  const input = screen.getByLabelText(/upload/i)
  fireEvent.change(input, { target: { files: [file] } })

  // 等待上传完成
  await waitFor(() =>
    expect(screen.getByText(/upload complete/i)).toBeInTheDocument(),
  )
})
