import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            SignIns: [],

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
          <h1>This is the Sign-In page</h1>
          <button>Sign In</button>
        </div>
      </div>
    );
  }
}

export default SignIn;
