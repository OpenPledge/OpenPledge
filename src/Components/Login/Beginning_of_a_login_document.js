import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Log_In extends Component {
  state = {
    username: '',
    password: '',
    redirectTo: null
  }

  LogIn = () => {
    const data = {
      username: this.state.username,
      password: this.state.password,
    };

export default Log_In;
