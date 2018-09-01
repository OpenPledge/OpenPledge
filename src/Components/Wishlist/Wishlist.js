import React, { Component } from 'react';
import './Wishlist.css';

class Wishlist extends Component {
    constructor(props){
        super(props)
        this.state = {
            wishLists: [],

        }
    }
    componentDidMount() {
        this.render();
    }

    componentWillMount() {
        // All WishLists including their items
        fetch('http://localhost:8000/api/wishlist/get_all')
          .then(data => data.json())
          .then(result => {
                console.log(result.data);
                this.setState({
                    wishLists: result.data,
                })
          })
          .catch(err => console.error(err))
    }

  render() {
    return (
      <div className="Container">
        <div className="Header">
          <h1>Donation Drives Running Now</h1>
            {this.state.wishLists.map(function(wishList, index){
                return (
                  <div key={index}>
                      <h2>{wishList.title}</h2>
                      <div id={wishList.id}>
                          {wishList.items.map(item =>
                            <p>{item.name} ({item.unit}) Needed: {item.needed} Pledged: {item.pledged}</p>)}

                      </div>
            </div>

                )
            })}

        </div>

    </div>
    );
  }
}

export default Wishlist;
