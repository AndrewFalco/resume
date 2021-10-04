import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import AppRouter from './components/AppRouter';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <AppRouter/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);