import React, { Component } from 'react';
import './SignUp.css';
import Button from '../Button/button.js';
class SignUp extends Component {
  state = {
    username: '',
    password: '',
  }

  onSubmit = () => {
    const url = '/sign-up';
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
      console.log("Response Received", responseData)
    });
  }

  onUsernameChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      username: value,
    });
    console.log('Username:', value);
  }

  onPasswordChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      password: value,
    });
    console.log('Password:', value);
  }
  
  render() {
    return (
      <div className="SignUp">
        <div className="InputFields">
          <h1 className="SignUp--title">Sign Up</h1>
          <h2>username: {this.props.username}
          <input
            name="username"
            placeholder="Username"
            value={this.props.username}
            onChange={this.onUsernameChange}
          />
          </h2>

            <h2>password: {this.props.password}
            <input
              name="password"
              placeholder="Password"
              value={this.props.password}
              onChange={this.onPasswordChange}
            />
            </h2>
          <Button onClick={this.onSubmit}>sign up</Button>
        </div>
      </div>
    );
  }
}

export default SignUp;
