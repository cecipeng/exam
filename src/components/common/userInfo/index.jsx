import React from 'react'
import './style'

export default class UserInfo extends React.Component {
  render() {
    const { userInfo } = this.props
    return (
      <div className="com-userinfo layout-bfc" data-id={userInfo.id}>
        <span className="com-userinfo__avatarwrap layout-bfc__left">
          <img className="com-userinfo__avatar" src={userInfo.avatar} />
        </span>
        <p className="com-userinfo__name layout-bfc__content">{userInfo.name}</p>
      </div>
    )
  }
}
