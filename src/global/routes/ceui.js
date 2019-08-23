import { asyncLoad } from 'global/util/async-load'

// ----- Components ----- //
import CeuiContainer from '../../components/ceui' // TODO 默认加载的组件

// TODO 路由配置
export default {
  path: '/ceui',
  component: CeuiContainer,
  description: '组件列表',
  index: true, // 默认子路由
  sub: {
    homepage: {
      component: asyncLoad('components/ceui/pages/homepage'),
      description: '首页',
      index: true
    },
    list: {
      path: '/list',
      component: asyncLoad('components/ceui/pages/list'),
      description: '组件列表'
    }
  }
}
