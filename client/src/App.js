import React, { useState } from 'react';
import UserContext from './contexts/userContext';
import './App.css';
import Header from './components/common/Header';
import LoginPage from './containers/login';
import RegisterPage from './containers/register';
import ForgotPasswordPage from './containers/forgotPassword';
import WelcomePage from './containers/Welcome';
import Home from './containers/homePage';
import ResetPassword from './containers/resetPassword';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
    <div className="App">
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header />
        <ToastContainer className="toast-container" />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/forgotPassword">
              <ForgotPasswordPage />
            </Route>
            <Route path="/resetPassword/:token">
              <ResetPassword />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/welcome">
              <WelcomePage />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
