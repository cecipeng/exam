import React from 'react'
import { actions, smart } from '@gem-mine/durex'
import style from './style'
// TODO 都要检查下，删除不要的代码

export class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      isMenuOpen: false // TODO 可参考代码 菜单是否打开
    }
  }
  // TODO 可参考代码 菜单显隐
  handleMenuOpen(isOpen) {
    this.setState({
      isMenuOpen: isOpen
    })
  }
  render() {
    const { isMenuOpen } = this.state
    const { title } = this.props
    return (
      <div className="com-header layout-bfc">
        <div className="layout-bfc__left">
          <span className="com-header__backbtn" onClick={actions.routing.goBack()}></span>
        </div>
        <div className="layout-bfc__right">
          <button className='com-header__btn' onClick={actions.routing.push('/publish')}>发布房源</button>
        </div>
        <div className="layout-bfc__content">
          <h1 className="com-header__title">{title}</h1>
        </div>
      </div>
    )
  }
}

export default smart(
  state => {
    return {
      title: state.global.title
    }
  },
  props => {
    return {
      
    }
  }
)(Header)
