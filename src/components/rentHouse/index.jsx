import React from 'react'

import List from './pages/list'
import './style'

export default class RentHouseContainer extends React.Component {
  render() {
    return (
      <div className="mod-renthouse">
        <List />
      </div>
    )
  }
}
