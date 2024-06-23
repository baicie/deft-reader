import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import OverviewView from './books-view'
import { TableColumnsType, TableProps, UploadProps, message } from 'antd'

export default observer(() => {
  const { t } = useTranslation()
  const columns: TableColumnsType = []
  const data: TableProps['dataSource'] = []

  const uploadProps: UploadProps = {
    name: 'file',
    multiple: true,
    action: '/api/upload',
    showUploadList: false,
    onChange(info) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files)
    },
  }

  return (
    <OverviewView
      t={t}
      columns={columns}
      data={data}
      pagination={{}}
      uploadProps={uploadProps}
    />
  )
})
