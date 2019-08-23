import React from 'react'
import { actions, smart } from '@gem-mine/durex'

export class ListNav extends React.Component {
  render() {
    const { componentsList, currentComponent, handleToggleComponentsView } = this.props
    const _listItem = componentsList && componentsList.map((item, index) => (
      <li key={index} className={`ceui-listnav__item ${currentComponent.id === item.id ? 'active' : ''}`} onClick={() => { handleToggleComponentsView(item) }}>{item.name}</li>
    ))
    return (
      <ul className="ceui-listnav">
        { _listItem }
      </ul>
    )
  }
}

export default smart(
  state => {
    return {

    }
  }
)(ListNav)
