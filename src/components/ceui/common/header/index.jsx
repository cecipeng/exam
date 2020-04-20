import React from 'react'
import { Link } from '@gem-mine/durex'

class Header extends React.Component {
  render() {
    return (
      <div className="com-header layout-bfc">
        <div className="layout-bfc__left">
          <h1 className="com-header__title">CeUI</h1>
          <ul className="com-nav">
            <li className="com-nav__item">
              <Link to={'/'}>首页</Link>
            </li>
            <li className="com-nav__item">
              <Link to={'/list'}>列表</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
