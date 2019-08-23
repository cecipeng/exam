import React from 'react'
import { actions, smart } from '@gem-mine/durex'
import style from '../style'
import ListNav from './listNav'
import ListContent from './ListContent'
import { COMPONENTS_LIST_CONTANTS } from '../contants'
import _ from 'lodash'

export class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentComponent: COMPONENTS_LIST_CONTANTS[0]
    }
    this.handleToggleComponentsView = this.handleToggleComponentsView.bind(this)
  }
  handleToggleComponentsView(newObj) {
    this.setState({
      currentComponent: newObj
    })
  }
  render() {
    const componentsList = COMPONENTS_LIST_CONTANTS
    const { currentComponent } = this.state
    return (
      <div className="ceui-components">
        <div className="ceui-components__side">
          <ListNav
            componentsList={componentsList}
            currentComponent={currentComponent}
            handleToggleComponentsView={this.handleToggleComponentsView}
          />
        </div>
        <div className="ceui-components__content">
          <ListContent
            currentComponent={currentComponent}
          />
        </div>
      </div>
    )
  }
}

export default smart(
  state => {
    return {

    }
  }
)(List)
