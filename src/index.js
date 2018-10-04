import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wishlist from './Components/Wishlist/Wishlist.js';
import Dashboard from './Components/Dashboard/Dashboard.js';

import SignIn from './Components/SignIn/SignIn.js';
import SignUp from './Components/SignUp/SignUp.js';
import Commitment from './Components/Commitment/Commitment.js';

ReactDOM.render(<Commitment />, document.getElementById('root'));
registerServiceWorker();
