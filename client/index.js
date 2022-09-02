import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Router } from 'react-router-dom';
import history from './history'
import App from './App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <Router history={history}>
    <App />
  </Router>);

//ReactDOM.render(<App />);
