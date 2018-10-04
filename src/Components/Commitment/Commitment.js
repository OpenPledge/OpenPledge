import React, { Component } from 'react';
import './Commitment.css';

class Commitment extends Component {
    constructor(props){
        super(props)
        this.state = {
            Commitments: [],

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
          <h1>This is the Commitment page</h1>
          <button>Pledge Item</button>
        </div>
      </div>
    );
  }
}

export default Commitment;
