import React from 'react'
import OnlineUser from './pages/onlineUser'
import MessageDisplay from './pages/messageDisplay'
import './style'

export default class ChartRoomContainer extends React.Component {
  render() {
    return (
      <div className="mod-chartroom">
        <OnlineUser />
        <MessageDisplay />
      </div>
    )
  }
}
