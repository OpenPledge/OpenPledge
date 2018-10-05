import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Log_In extends Component {
  state = {
    username: '',
    password: '',
    redirectTo: null
  }

  Log_In = () => {
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    fetch(url, {
      method: "POST",
      headers: {
        '': ''
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

export default Log_In;
