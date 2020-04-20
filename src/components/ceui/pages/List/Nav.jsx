import React from 'react'
// ====== Contant ====== //
import * as Contant from '../../contants'

export default function Nav(props) {
  const { curComponent, handleToggleComponentsView } = props
  const _list = Contant.COMPONENTS_LIST ? Contant.COMPONENTS_LIST : []
  const _navItem = _list.map((item) => (
    <li
      key={item.identifier}
      className={`ceui-list__nav-item ${curComponent.identifier === item.identifier ? 'active' : ''}`}
      onClick={() => { handleToggleComponentsView(item) }}
    >
      {item.name}
    </li>
  ))
  return (
    <ul className="ceui-list__nav">
      { _navItem }
    </ul>
  )
}
