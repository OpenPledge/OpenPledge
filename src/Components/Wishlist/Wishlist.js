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

    pledge(wishList, item){
        console.log('Pledge clicked for Wish List: ' + wishList + ' Item: ' + item);
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
        </div>
          <div className="Wishlist-all">
            {this.state.wishLists.map((wishList, index) => {
                return (
                  <div key={index} className="Wishlist-list">
                      <div className="Wishlist-title"><h2>{wishList.title}</h2></div>

                          {wishList.items.map(item =>
                            <div key={item.name} className="Wishlist-item">
                                <div className="Wishlist-item-name">{item.name}</div>
                                <div className="Wishlist-item-unit">({item.unit})</div>
                                <div className="Wishlist-item-needed">Needed: {item.needed}</div>
                                <div className="Wishlist-item-pledged">Pledged: {item.pledged}</div>
                                <div className="Wishlist-item-button"><button onClick={() => this.pledge(wishList.id, item.id)}>Pledge</button></div>
                            </div>)}

                      </div>

                )
            })}

        </div>

    </div>
    );
  }
}

export default Wishlist;
