import React from 'react'
import { actions, smart } from '@gem-mine/durex'
import ButtonDemo from 'components/ceui/ceuiComponents/button/doc.md'
import { asyncLoad } from 'global/util/async-load'
export class ListContent extends React.Component {
  render() {
    const { currentComponent } = this.props
    const ComponentDemo = asyncLoad(`components/ceui/ceuiComponents/${currentComponent.name}/doc.md`)
    
    return (
      <div className='ceui-listcontent'>
        <ComponentDemo />
      </div>
    )
  }
}

export default smart(
  state => {
    return {
      
    }
  }
)(ListContent)
