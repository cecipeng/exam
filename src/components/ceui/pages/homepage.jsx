import React from 'react'
import { actions, smart } from '@gem-mine/durex'
import style from '../style'
import _ from 'lodash'

export class Homepage extends React.Component {
  componentDidMount() {
    actions.global.setTitle('列表页')
    actions.ceui.fetchHouseList()
  }
  render() {
    const { houseList } = this.props
    return (
      <h1>ceui介绍</h1>
    )
  }
}

export default smart(
  state => {
    return {

    }
  }
)(Homepage)
