import React from 'react'
import { actions, smart } from '@gem-mine/durex'
import Nav from './nav'
import './style'

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
    return (
      <div className="com-header layout-bfc">
        <div className="layout-bfc__left">
          <span className="com-header__logo" />
          <h1 className="com-header__title">CeUI</h1>
        </div>
        <div className="layout-bfc__right">
          <Nav />
        </div>
      </div>
    )
  }
}

export default smart(
  state => {
    return {
      
    }
  },
  props => {
    return {
      
    }
  }
)(Header)
