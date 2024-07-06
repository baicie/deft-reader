import type { ReactElement } from 'react'
import { Flex, Table, TableProps, Upload, UploadProps } from 'antd'
import { TFunction } from 'i18next'
import { InboxOutlined } from '@ant-design/icons'

interface Props {
  columns: TableProps['columns']
  data: TableProps['dataSource']
  pagination: TableProps['pagination']
  t: TFunction<'translation', undefined>
  uploadProps: UploadProps
}

const DemoView = ({
  columns,
  data,
  pagination,
  uploadProps,
}: Props): ReactElement => (
  <Flex vertical>
    <Upload.Dragger {...uploadProps}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibited from uploading
        company data or other banned files.
      </p>
    </Upload.Dragger>

    <Table
      columns={columns}
      dataSource={data}
      pagination={pagination}
      rowKey="id"
    />
  </Flex>
)
export default DemoView
