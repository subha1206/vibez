import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/common/Header';
import AppRouter from './routes/AppRouter';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ToastContainer className="toast-container" />
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
