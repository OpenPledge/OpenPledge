import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Dashboard />, document.getElementById('root'));
registerServiceWorker();
