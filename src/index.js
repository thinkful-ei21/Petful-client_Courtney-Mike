import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dashboard from '../src/components/Dashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App >
    <Dashboard />
  </App>, document.getElementById('root'));
registerServiceWorker();
