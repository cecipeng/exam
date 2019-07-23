import durex from '@gem-mine/durex'
import request from '@gem-mine/request'
const { rentHouse } = request

durex.model({
  name: 'rentHouse',
  state: {
    houseList: []
  },
  reducers: {
  },
  effects: {
    fetchHouseList() {
      rentHouse.get('/house/list').then(res => {
        this.setField({
          houseList: res.data || []
        })
      })
    }
  }
})
