import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wishlist from './Components/Wishlist/Wishlist.js';
import Dashboard from './Components/Dashboard/Dashboard.js';

ReactDOM.render(<Wishlist />, document.getElementById('root'));
registerServiceWorker();
