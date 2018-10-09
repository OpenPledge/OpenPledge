import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wishlist from './Components/Wishlist/Wishlist.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
