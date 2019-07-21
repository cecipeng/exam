import React from 'react'
import RentHouseContainer from '../renthouse' // TODO 模块容器
import Header from '../common/header'

export default class Container extends React.Component {
  render() {
    return (
      <div className='layout'>
        <div className="layout__header">
          <Header />
        </div>
        <div className="layout__body">
          <RentHouseContainer />
        </div>
      </div>
    )
  }
}
