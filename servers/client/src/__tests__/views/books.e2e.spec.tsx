import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useInjectable } from '@/hooks/use-di'
import { useLogger } from '@/hooks/use-logger'
import { App, Button, UploadProps } from 'antd'
import { vi, Mock } from 'vitest'
import { useTranslation } from 'react-i18next'
import BookView from '@/view/books/books-view'

// Mock hooks and modules
vi.mock('@/hooks/use-di', () => ({
  useInjectable: vi.fn(),
}))
vi.mock('@/hooks/use-logger', () => ({
  useLogger: vi.fn(),
}))
vi.mock('react-i18next', () => ({
  useTranslation: vi.fn(),
}))

const uploadStoreMock = {
  files: [],
  queryUploadList: vi.fn(),
  deleteFile: vi.fn(),
}

const messageMock = {
  success: vi.fn(),
  error: vi.fn(),
}

const modalMock = {
  confirm: vi.fn().mockResolvedValue(true),
}

describe('BookView Component', () => {
  beforeEach(() => {
    ;(useInjectable as Mock).mockReturnValue(uploadStoreMock)
    ;(useLogger as Mock).mockReturnValue({ error: vi.fn() })
    ;(useTranslation as Mock).mockReturnValue({ t: (key: string) => key })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    App.useApp = () => ({ message: messageMock, modal: modalMock })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should render the component correctly', () => {
    const { t } = useTranslation()
    render(
      <BookView
        columns={[]}
        data={[]}
        pagination={{}}
        t={t}
        uploadProps={{}}
      />,
    )
    expect(screen.getByTestId('toggle-upload-button')).toBeInTheDocument()
  })

  it('should handle file upload success', async () => {
    const { t } = useTranslation()
    const uploadProps: UploadProps = {
      action: '/api/upload',
      showUploadList: false,
      beforeUpload: async () => {
        return true
      },
      onChange(info) {
        const { status } = info.file
        if (status === 'done') {
          messageMock.success('upload.upload.success', {
            filename: info.file.name,
          })
          uploadStoreMock.queryUploadList()
        } else if (status === 'error') {
          messageMock.error('upload.upload.failed', {
            filename: info.file.name,
          })
        }
      },
    }

    render(
      <BookView
        columns={[]}
        data={[]}
        pagination={{}}
        t={t}
        uploadProps={uploadProps}
      />,
    )

    const input = screen.getByTestId('toggle-upload-button')
    if (!input) {
      throw new Error('File input not found')
    }

    const file = new File(['dummy content'], 'example.png', {
      type: 'image/png',
    })

    // Mocking the event to simulate file upload success
    fireEvent.change(input, { target: { files: [file] } })

    await waitFor(() => {
      expect(messageMock.success).toHaveBeenCalledWith(
        'upload.upload.success',
        { filename: 'example.png' },
      )

      expect(uploadStoreMock.queryUploadList).toHaveBeenCalled()
    })
  })

  it('should confirm file deletion', async () => {
    uploadStoreMock.files = [
      {
        id: '1',
        bookName: 'Book 1',
        size: '1MB',
        uploadedAt: '',
        updateTime: '',
      },
    ] as any

    const columns = [
      {
        title: 'Name',
        dataIndex: 'bookName',
        key: 'bookName',
      },
      {
        title: 'Actions',
        key: 'actions',
        render: (_: any, record: { id: any }) => (
          <Button
            data-testid={`delete-button-${record.id}`}
            onClick={() => {
              modalMock.confirm().then(() => {
                uploadStoreMock.deleteFile(record.id)
              })
            }}
          >
            upload.delete
          </Button>
        ),
      },
    ]

    const { t } = useTranslation()
    const html = render(
      <BookView
        columns={columns}
        data={uploadStoreMock.files}
        pagination={{}}
        t={t}
        uploadProps={{}}
      />,
    )

    const deleteButton = html.getByTestId('delete-button-1')
    fireEvent.click(deleteButton)

    await waitFor(() => {
      expect(modalMock.confirm).toHaveBeenCalled()
      expect(uploadStoreMock.deleteFile).toHaveBeenCalledWith('1')
    })
  })
})
