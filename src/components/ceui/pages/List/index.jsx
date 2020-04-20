import React from 'react'

// ====== Components ====== //
import Nav from './Nav'
import ComponentsView from './ComponentsView'

// ====== Contants ====== //
import { COMPONENTS_LIST } from '../../contants'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curComponent: COMPONENTS_LIST[0] // 默认显示第一个组件
    }
  }
  _handleToggleComponentsView = (newVal) => {
    this.setState({
      curComponent: newVal
    })
  }
  render() {
    const { curComponent } = this.state
    return (
      <div className="ceui-list">
        <div className="ceui-list__sider">
          <Nav
            curComponent={curComponent}
            handleToggleComponentsView={this._handleToggleComponentsView}
          />
        </div>
        <div className="ceui-list__content">
          <ComponentsView
            curComponent={curComponent}
          />
        </div>
      </div>
    )
  }
}

export default List
