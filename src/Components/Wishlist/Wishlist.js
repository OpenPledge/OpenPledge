import React, { Component } from 'react';
import './Wishlist.css';
import { Card } from './Card.js';

import { Link } from 'react-router-dom'


class Wishlist extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Header">
          <h1>Donation Wishlist</h1>
        </div>
        <div className="List">
        </div>
        <div className="Footer">
        </div>
    </div>
    );
  }
}

export default Wishlist;
