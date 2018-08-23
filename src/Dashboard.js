import React, { Component } from 'react';
import logo from './logo.svg';
import './Dashboard.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
class Dashboard extends Component {
    state = {
        data: [
            {
                donationId: 1,
                pledgedBy: 'the_donation_papa2000',
                pledgedAt: new Date(Date.now()),
                items: [
                    {name: 'milk', size: 'oz', amount: '50'},
                    {name: 'oranges', size: 'x', amount: '50'},
                    {name: 'cats', size: 'male', amount: '3'},
                    {name: 'applesauce', size: 'x', amount: '50'}
                ],
            },
        ]
    };
  render() {
      const cardStyle = {width:"23vw", height:"23vh"};
      return (
      <div className="Dashboard">
        <header className="Dashboard-header">
          <img src={logo} className="Dashboard-logo" alt="logo" />
          <h1 className="Dashboard-title">Donation Test Page</h1>
        </header>
      <div className="Dashboard-Cards">
          {this.state.data.map(pledge => (
            <div className="Dashboard-Card">
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle>New Pledge</CardTitle>
                    <CardText>
                        From user: {pledge.pledgedBy}<br/>
                        <ul>
                        {pledge.items.map(item => (
                          <li>{item.amount} {item.size} {item.name}</li>
                            ))}
                        </ul>
                        </CardText>
                    <Button>Confirm</Button>
                </Card>
            </div>
          ))}

      </div>
      </div>
    );
  }
}

export default Dashboard;
