import React from 'react'
import { Routes } from '@gem-mine/durex'
import Homepage from './pages/homepage'
import Header from './../common/header'
import './style'

export default class CeuiContainer extends React.Component {
  render() {
    return (
      <div className="layout">
        <div className="layout__header">
          <Header />
        </div>
        <div className="layout__body">
          <div className="mod-ceui">
            <Routes path="ceui" />
          </div>
        </div>
      </div>

    )
  }
}
