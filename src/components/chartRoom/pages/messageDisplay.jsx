import React from 'react'
import { smart } from '@gem-mine/durex'
import UserInfo from '../../common/userInfo'

export class MessageDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usernameField: '',
      userAvatarField: '',
      formMessage: ''
    }
    this.setUsername = this.setUsername.bind(this)
    this.setAvatar = this.setAvatar.bind(this)
    this.setMessage = this.setMessage.bind(this)
    this.validate = this.validate.bind(this)
    this.handleSignIn = this.handleSignIn.bind(this)
  }

  render() {
    const { messageList, currentUser } = this.props
    const messageItem = messageList && messageList.map((item) => {
      let isSelfMessage = currentUser.id === item.publishUser.id
      return (
        <div className="chartroom-display__row">
          <div className={isSelfMessage ? 'chartroom-display__self' : 'chartroom-display__others'}>
            <UserInfo userInfo={item.publishUser} />
            <span className="chartroom-display__publish-time">{item.publishTime}</span>
            <p className="chartroom-display__message-text">{item.message}</p>
          </div>
        </div>
      )
    })

    return (
      <div className="chartroom-display">
        { messageItem }
      </div>
    )
  }
}

export default smart(
  state => {
    return {
      messageList: state.global.messageList,
      currentUser: state.global.currentUser
    }
  }
)(MessageDisplay)
