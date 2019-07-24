import { asyncLoad } from 'global/util/async-load'

import Container from '../../components/container'
import RentHouseContainer from '../../components/rentHouse/' // TODO 默认加载的组件

// TODO 路由配置
export default {
  path: '/',
  component: Container,
  description: '容器层',
  sub: {
    entry: {
      path: '/rent',
      component: RentHouseContainer,
      description: '租房首页',
      index: true, // 默认子路由
      exact: true, // 精确匹配
      // TODO 可参考代码
      // module: { // 平级模块路由
      //   detail: {
      //     description: '外卖表单',
      //     path: '/:id',
      //     component: asyncLoad('components/takeout/pages/orderForm')
      //   }
      // }
    },
    list: {
      path: '/list',
      component: asyncLoad('../../components/rentHouse/pages/list'),
      description: '房源列表'
    },
    // detail: {
    //   path: '/detail/:id',
    //   component: asyncLoad('components/takeout/pages/myOrder'),
    //   description: '房源详情'
    // },
    // publish: {
    //   path: '/publish',
    //   component: asyncLoad('components/takeout/pages/myOrder'),
    //   description: '发布房源'
    // }
  }
}
