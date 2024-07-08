export default {
  name: 'Book Name',
  size: 'Size',
  createTime: 'Create Time',
  updateTime: 'Update Time',
  delete: 'Delete',
  actions: 'Actions',
  popconfirm: {
    title: 'Delete Book',
    description: 'Are you sure you want to delete this book?',
    okText: 'Yes',
    cancelText: 'No',
  },
  upload: {
    success: '{filename} uploaded successfully',
    failed: '{filename} upload failed',
    error: 'Upload error',
    confirm: {
      title: 'Delete Book',
      description: 'Are you sure you want to delete this book?',
      okText: 'Yes',
      cancelText: 'No',
    },
  },
  view: {
    drag: 'Click or drag files to this area to upload',
    hint: 'Support for a single or batch upload. It is strictly forbidden to upload company data or other prohibited files.',
  },
}
