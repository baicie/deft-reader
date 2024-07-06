import { useInjectable } from '@/hooks/use-di'
import { useLogger } from '@/hooks/use-logger'
import { validateFile } from '@/service/files'
import { UploadStore } from '@/store/upload'
import { calculateFileMD5 } from '@/utils/md5'
import { App, TableColumnsType, UploadProps } from 'antd'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import OverviewView from './books-view'
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
  ]

  const uploadProps: UploadProps = {
    name: 'file',
    multiple: true,
    action: '/api/upload',
    showUploadList: false,
    onChange(info) {
      const { status } = info.file
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
        upload.queryUploadList()
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
    async beforeUpload(file) {
      let res = false
      try {
        const md5 = await calculateFileMD5(file)
        res = await validateFile(md5)
        if (res) {
          logger.error(t('upload.error'))
        } else {
          res = await modal.confirm({
            title: '警告',
            content: '这是一条警告信息。',
            okText: '确定',
            cancelText: '取消',
            type: 'warning',
            centered: true,
          })
        }
      } catch (_e) {
        logger.error(t('upload.error'))
        res = false
      }
      return res
    },
  }

  useEffect(() => {
    upload.queryUploadList()
  }, [upload])

  return (
    <OverviewView
      t={t}
      columns={columns}
      data={upload.files}
      pagination={{}}
      uploadProps={uploadProps}
    />
  )
})
