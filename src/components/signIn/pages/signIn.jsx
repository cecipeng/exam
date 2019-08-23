import React from 'react'
import { actions, smart } from '@gem-mine/durex'
import _ from 'lodash'
import { AVATAR_IMG } from '../util'

export class SignIn extends React.Component {
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

  setUsername(e) {
    this.setState({
      usernameField: e.target.value
    })
  }
  setAvatar(img) {
    this.setState({
      userAvatarField: img
    })
  }
  setMessage(message) {
    this.setState({
      formMessage: message
    })
  }
  validate() {
    if (this.state.usernameField.length === 0) {
      this.setMessage('昵称不能为空！')
      return false
    }
    if (this.state.usernameField.length > 5) {
      this.setMessage('昵称小于5个字符！')
      return false
    }
    return true
  }
  handleSignIn() {
    const { usernameField, userAvatarField } = this.state
    const { socket } = this.props
    // 1.验证输入合法性
    if (this.validate()) {
      const user = {
        id: 0,
        name: usernameField,
        avatar: userAvatarField
      }

      // 2.发布登录
      socket.emit('signIn', user)

      // 3.清空错误提示
      this.setMessage('')

      // 4.跳转到聊天室
      actions.routing.push('/chartRoom')
    }
  }
  render() {
    const avatarItem = AVATAR_IMG && AVATAR_IMG.map((item) => (
      <li className="signin-form__avataritem is-active" onClick={this.setAvatar(item)}>
        <img src={item} />
      </li>
    ))

    return (
      <div className="signin-form">
        <div className="signin-form__title">xxxxxx</div>
        <div className="signin-form__row signin-form__username">
          <input type="text" value={this.state.usernameField} onChange={this.setUsername} className="signin-form__input" placeholder="请输入昵称" />
          <p className="signin-form__errortip">{ this.state.formMessage }</p>
        </div>
        <div className="signin-form__row signin-form__pwd">
          <ul className="signin-form__avatarlist">
            { avatarItem }
          </ul>
        </div>
        <div className="signin-form__btnwrap">
          <a className="signin-form__submit" onClick={this.handleSignIn}>登录</a>
        </div>
      </div>
    )
  }
}

export default smart(
  state => {
    return {
      socket: state.global.socket
    }
  }
)(SignIn)
