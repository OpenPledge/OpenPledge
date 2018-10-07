import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Log_In extends Component {
  state = {
    username: '',
    password: '',
    redirectTo: null
  }

  onLog In = () => {
    const url = '/login';
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
          alert("Failed login attempt.")
        }
        console.log("directing to", this.state.redirectTo);
      }
    );
  }

export default Log_In;
