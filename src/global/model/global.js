import durex from '@gem-mine/durex'

// TODO 全局使用的state，没有内容时删除该文件
durex.model({
  name: 'global',
  state: {
    title: '' // TODO header的标题
  },
  reducers: {},
  effects: {
    setTitle(title) {
      return this.setField({
        title
      })
    }
  }
})
