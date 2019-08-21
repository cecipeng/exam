import React from 'react'
import { actions } from '@gem-mine/durex'
import './style'
// TODO 都要检查下，删除不要的代码

export default class Nav extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <ul className="com-nav">
        <li className="com-nav__item" onClick={() => { actions.routing.push('/ceui') }}>home</li>
        <li className="com-nav__item" onClick={() => { actions.routing.push('/ceui/list') }}>list</li>
      </ul>
    )
  }
}
