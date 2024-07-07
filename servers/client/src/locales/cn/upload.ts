export default {
  name: '书籍名称',
  size: '大小',
  createTime: '创建时间',
  updateTime: '更新时间',
  delete: '删除',
  actions: '操作',
  popconfirm: {
    title: '删除书籍',
    description: '确定删除此书籍吗？',
    okText: '是',
    cancelText: '否',
  },
  upload: {
    success: '{filename} 上传成功',
    failed: '{filename} 上传失败',
    error: '上传错误',
    confirm: {
      title: '删除书籍',
      description: '确定删除此书籍吗？',
      okText: '确定',
      cancelText: '取消',
    },
  },
  view: {
    drag: '点击或拖动文件到此区域上传',
    hint: '支持单个或批量上传。严禁上传公司数据或其他禁止文件。',
  },
}
