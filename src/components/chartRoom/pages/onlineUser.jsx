import React from 'react'
import { smart } from '@gem-mine/durex'
import UserInfo from '../../common/userInfo'

export class OnlineUser extends React.Component {
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
    const { userList } = this.props
    const userCount = userList && userList.length > 0 ? userList.length : 0
    const userItem = userList && userList.map((item) => (
      <li className="chartroom-onlineuser__item" data-id={item.id}>
        <UserInfo userInfo={item} />
      </li>
    ))

    return (
      <div className="chartroom-onlineuser">
        <h3 className="chartroom-onlineuser__header">人数<span className="chartroom-onlineuser__count">{userCount}</span></h3>
        <ul className="chartroom-onlineuser__list">
          { userItem }
        </ul>
      </div>
    )
  }
}

export default smart(
  state => {
    return {
      userList: state.global.userList
    }
  }
)(OnlineUser)
