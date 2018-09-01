import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Landing.css';
import Button from '../Button/button.js';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">

        <h1 className="Landing--title">St. Anthony's</h1>
        <p className="Landing--slogan">Volunteer or Donate your Time!</p>
        <div>
          <Link to="/sign-up/">
            <Button className="Button">
              Sign up
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/sign-in/">
            <Button className="Button">
              Sign in
            </Button>
          </Link>
        </div>

      </div>
    );
  }
}

export default Landing;
