import React, { Component } from 'react';
import './LogIn.css';
import { Redirect } from 'react-router-dom';
import Button from '../Button/button.js';
import Browse from '../Browse/Browse.js';


class LogIn extends Component {
  state = {
    username: '',
    password: '',
    redirectTo: null
  }

  onLogIn = () => {
    const url = '/log-in';
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
        console.log("response", responseData);
        if (responseData.superSuccessDog) {
          this.props.onSuccessfulLogIn({
            isLoggedIn: true,
            data: data,
          })
          this.setState({
            redirectTo: '/browse/'
          })
        }
        else {
          alert("Login unsuccessful. Please try again.")
        }
        console.log("directing to", this.state.redirectTo);
      }
    );
  }

  onUsernameChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      username: value,
    });
  }

  onPasswordChange = (ev) => {
    let value = ev.target.value;
    this.setState({
      password: value,
    });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} render={(props) =>
        <Browse {...props} isLoggedIn={this.state.isLoggedIn} />
      } />
    } else {
    return (
      <div className="LogIn">
        <div className="InputFields">
          <h1 className="LogIn--title">Welcome Back!</h1>
            <h2>username:
            <input
              placeholder="enter your username"
              onChange={this.onUsernameChange}
            />
            </h2>
            <h2>password:
            <input
              type="password"
              placeholder="enter your password"
              onChange={this.onPasswordChange}
            />
            </h2>
          <Button onClick={this.onLogIn}>log in</Button>
        </div>
      </div>
    );
  }
  }
}

export default LogIn;
