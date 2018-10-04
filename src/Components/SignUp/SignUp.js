import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            SignUps: [],

        }
    }
    componentDidMount() {
        this.render();
    }

    componentWillMount() {

    }

  render() {
    return (
      <div className="Container">
        <div className="Header">
          <h1>This is the Sign-Up page</h1>
          <button>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default SignUp;
