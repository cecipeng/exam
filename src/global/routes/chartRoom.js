import { asyncLoad } from 'global/util/async-load'

import CeuiContainer from '../../components/ceui' // TODO 默认加载的组件

// TODO 路由配置
export default {
  path: '/',
  description: 'xx',
  sub: {
    signIn: {
      component: asyncLoad('components/signIn/index'),
      description: '登录',
      index: true
    },
    chartRoom: {
      path: '/chartRoom',
      component: asyncLoad('components/chartRoom/index'),
      description: '聊天室'
    }
  }
}
