import durex from '@gem-mine/durex'
import io from 'socket.io-client'

// TODO 全局使用的state，没有内容时删除该文件
durex.model({
  name: 'global',
  state: {
    socket: io(),
    currentUser: { // 当前登录用户信息
      id: '111',
      name: '111',
      avatar: 'https://xxx'
    },
    userList: [
      {
        id: '111',
        name: '111',
        avatar: 'https://xxx'
      },
      {
        id: '222',
        name: '222',
        avatar: 'https://xxx'
      }
    ],
    messageList: [
      {
        message: 'xxxxxxxx',
        publishUser: {
          id: '111',
          name: '111',
          avatar: 'https://xxx'
        },
        publishTime: '2019-11-12 12:12'
      }
    ]
  },
  reducers: {},
  effects: {
    setCurrentUser(user) {
      return this.setField({
        currentUser: user
      })
    },
    updateUserList(user) {
      return this.setField({
        userList: Array.isArray(user) ? user : []
      })
    },
    updateMessageList(message) {
      return this.setField({
        messageList: Array.isArray(message) ? message : []
      })
    }
  }
})
