import { useInjectable } from '@/hooks/use-di'
import { useLogger } from '@/hooks/use-logger'
import { validateFile } from '@/service/files'
import { UploadStore } from '@/store/upload'
import { calculateFileMD5 } from '@/utils/md5'
import {
  App,
  Button,
  Popconfirm,
  Space,
  TableColumnsType,
  UploadProps,
} from 'antd'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import BookView from './books-view'
import dayjs from 'dayjs'

export default observer(() => {
  const { t } = useTranslation()
  const upload = useInjectable(UploadStore)
  const logger = useLogger()
  const { message, modal } = App.useApp()

  const columns: TableColumnsType = [
    {
      title: t('upload.name'),
      dataIndex: 'bookName',
      key: 'bookName',
    },
    {
      title: t('upload.size'),
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: t('upload.createTime'),
      dataIndex: 'uploadedAt',
      key: 'uploadedAt',
      render: (value: string) => dayjs(value).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: t('upload.updateTime'),
      dataIndex: 'updateTime',
      key: 'updateTime',
      render: (value: string) => dayjs(value).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: t('upload.actions'),
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
            title={t('upload.popconfirm.title')}
            description={t('upload.popconfirm.description')}
            okText={t('upload.popconfirm.okText')}
            cancelText={t('upload.popconfirm.cancelText')}
            onConfirm={() => upload.deleteFile(record.id)}
          >
            <Button danger type="text">
              {t('upload.delete')}
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  const uploadProps: UploadProps = {
    name: 'file',
    multiple: true,
    action: '/api/upload',
    showUploadList: false,
    onChange(info) {
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
    async beforeUpload(file) {
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

  useEffect(() => {
    upload.queryUploadList()
  }, [upload])

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
