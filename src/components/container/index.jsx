import React from 'react'
import rentHouseContainer from '../renthouse' // TODO 模块容器
import Header from '../common/header'

export default class Container extends React.Component {
  render() {
    return (
      <div className='layout'>
        <div className="layout__header">
          <Header />
        </div>
        <div className="layout__body">
          <rentHouseContainer />
        </div>
      </div>
    )
  }
}
