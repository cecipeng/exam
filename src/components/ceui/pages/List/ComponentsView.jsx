import React from 'react'
import { asyncLoad } from 'global/util/async-load'
import { COMPONENTS_LIST } from '../../contants'

class ComponentsView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isViewCode: false
    }
  }

  _handleViewCode = (e) => {
    e.stopPropagation()
    this.setState((prev) => ({
      isViewCode: !prev.isViewCode
    }))
  }
  _renderDemo = () => {
    const { curComponent } = this.props
    const { isViewCode } = this.state
    let demo
    COMPONENTS_LIST && COMPONENTS_LIST.forEach((item) => {
      if (curComponent.identifier === item.identifier) {
        demo = item.demo.map((item2, index) => {
          const DemoComponent = asyncLoad(`components/ceui/ceuiComponents/${curComponent.name}/demo/${item2}/index.jsx`)
          const DemoCode = asyncLoad(`components/ceui/ceuiComponents/${curComponent.name}/demo/${item2}/doc.md`)
          return (
            <li key={index}>
              <DemoComponent curComponent={curComponent} />
              <div className="ceui-democode">
                <a className="ceui-democode__viewbtn" onClick={(e) => {this._handleViewCode(e) }}>查看代码</a>
                <div className={`ceui-democode__body ${isViewCode ? 'open' : ''}`}>
                  <DemoCode />
                </div>
              </div>
            </li>
          )
        })
      }
    })
    return demo
  }
  render() {
    const { curComponent } = this.props
    const ComponentInfo = asyncLoad(`components/ceui/ceuiComponents/${curComponent.name}/doc.md`)
    return (
      <div className="ceui-component">
        <div className="ceui-md">
          <ComponentInfo />
        </div>
        
        <div className="ceui-component__list">
          { this._renderDemo() }
        </div>
      </div>
    )
  }
}

export default ComponentsView
