import React from 'react'
import SignIn from './pages/signIn'
import './style'

export default class SignInContainer extends React.Component {
  render() {
    return (
      <div className="mod-signin">
        <SignIn />
      </div>
    )
  }
}
