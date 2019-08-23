import React from 'react'
import { smart } from '@gem-mine/durex'
import UserInfo from '../../common/userInfo'
import { throws } from 'assert';
import moment from 'moment'
export class MessagePublish extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messageField: '',
      canPublish: false
    }
    this.setMessage = this.setMessage.bind(this)
    this.validate = this.validate.bind(this)
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this)
    this.handlePublish = this.handlePublish.bind(this)
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleInputKeyDown)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleInputKeyDown)
  }
  setMessage(e) {
    this.setState({
      messageField: e.target.value
    }, () => {
      if (this.state.messageField.length > 0) {
        this.setState({
          canPublish: true
        })
      }
    })
  }
  handleInputKeyDown(e) {
    const keyCode = e.keyCode || e.which || e.charCode
    const altKey = e.altKey
    if (altKey && keyCode === 13) {
      this.handlePublish()
    }
    e.preventDefault()
  }
  handlePublish() {
    const { canPublish, messageField } = this.state
    const { socket, currentUser } = this.props
    if (canPublish) {
      const message = {
        message: messageField,
        publishUser: currentUser,
        publishTime: moment().format('YYYY-MM-DD HH:mm:ss')
      }
      // 更新消息
      socket.emit('updateMessages', message)

      // 清空输入框
      this.setState({
        messageField: ''
      })
    }
  }
  render() {
    const { userList } = this.props
    const { canPublish } = this.state
    const userCount = userList && userList.length > 0 ? userList.length : 0
    const userItem = userList && userList.map((item) => (
      <li className="chartroom-onlineuser__item" data-id={item.id}>
        <UserInfo userInfo={item} />
      </li>
    ))

    return (
      <div className="chartroom-publish">
        <input value={this.state.messageField} onChange={this.setMessage} className="chartroom-publish__input" />
        <a className="chartroom-publish__btn">退出</a>
        <a className={`chartroom-publish__btn ${canPublish ? '' : 'is-disabled'}`} onClick={this.handlePublish}>发表</a>
      </div>
    )
  }
}

export default smart(
  state => {
    return {
      socket: state.global.socket,
      currentUser: state.global.currentUser
    }
  }
)(MessagePublish)
