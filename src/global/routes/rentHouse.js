import { asyncLoad } from 'global/util/async-load'

import Container from 'components/Container'
import List from 'components/rentHouse/pages/list' // TODO 默认加载的组件

// TODO 路由配置
export default {
  path: '/',
  component: Container,
  description: '容器层',
  sub: {
    entry: {
      path: '/list',
      component: List,
      description: '列表页',
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
    detail: {
      path: '/detail/:id',
      component: asyncLoad('components/takeout/pages/myOrder'),
      description: '房源详情'
    },
    publish: {
      path: '/publish',
      component: asyncLoad('components/takeout/pages/myOrder'),
      description: '发布房源'
    }
  }
}
