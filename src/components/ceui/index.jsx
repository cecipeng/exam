import React from 'react'
import { Routes } from '@gem-mine/durex'
import Header from './common/header'
import './style'

export default class CeuiContainer extends React.Component {
  render() {
    return (
      <div className="ceui-layout">
        <div className="ceui-layout__header">
          <Header />
        </div>
        <div className="ceui-layout__body">
          <div className="mod-ceui">
            <Routes path="ceui" />
          </div>
        </div>
      </div>

    )
  }
}
