import React from 'react'
import { smart, withRouter, Routes } from '@gem-mine/durex'
import CeuiContainer from '../ceui' // TODO 模块容器
import Header from '../common/header'

export default class Container extends React.Component {
  render() {
    return (
      <div className='layout'>
        <div className="layout__header">
          <Header />
        </div>
        <div className="layout__body">
          <Routes />
        </div>
      </div>
    )
  }
}
