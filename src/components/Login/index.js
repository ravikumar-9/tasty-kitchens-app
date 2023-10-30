import {Component} from 'react'

import './index.css'

const smallImageUrl =
  'https://res.cloudinary.com/ddgvegjgk/image/upload/v1635311318/tastykitchens/Rectangle_1457_ri10vf.png'
console.log(smallImageUrl)
const largeImageURl =
  'https://res.cloudinary.com/ddgvegjgk/image/upload/v1635315803/tastykitchens/Rectangle_1457_noyo6j.png'

console.log(largeImageURl)

class Login extends Component {
  state = {name: '', password: ''}

  onChangeUserName = event => {
    this.setState({name: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {name, password} = this.state

    const userDetails = {name, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const responseData = await response.json()
    console.log(responseData)
  }

  render() {
    const {name, password} = this.state

    return (
      <div className="large-device-container">
        <div className="login-form-container">
          <div className="login-form-card">
            <img
              src="https://res.cloudinary.com/dppqkea7f/image/upload/v1625742512/Frame_274_zlrzwk.svg"
              alt="website logo"
              className="website-logo"
            />
            <h1 className="tasty-kitchen-heading">Tasty Kitchens</h1>
            <h1 className="login-heading">Login</h1>
            <form className="login-form" onSubmit={this.onSubmitForm}>
              <label htmlFor="username" className="labels">
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                className="input-field"
                onChange={this.onChangeUserName}
                value={name}
              />
              <label htmlFor="password" className="labels">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                className="input-field"
                onChange={this.onChangePassword}
                value={password}
              />
              <button className="login-button" type="button">
                Login
              </button>
            </form>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/ddgvegjgk/image/upload/v1635315803/tastykitchens/Rectangle_1457_noyo6j.png"
          alt="landing-img"
          className="landing-image"
        />
      </div>
    )
  }
}

export default Login
