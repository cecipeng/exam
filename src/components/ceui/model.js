import durex from '@gem-mine/durex'
import request from '@gem-mine/request'
const { ceui } = request

durex.model({
  name: 'ceui',
  state: {
    houseList: []
  },
  reducers: {
  },
  effects: {
    fetchHouseList() {
      ceui.get('/house/list').then(res => {
        this.setField({
          houseList: res.data || []
        })
      })
    }
  }
})
