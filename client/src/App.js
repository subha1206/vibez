import React from 'react';
import './App.css';
import Header from './components/common/Header';
import LoginPage from './containers/login';
import RegisterPage from './containers/register';
import ForgotPasswordPage from './containers/forgotPassword';
import WelcomePage from './containers/Welcome';
import Home from './containers/homePage';
function App() {
  return (
    <div className="App">
      {/* <ForgotPasswordPage /> */}
      <Header />
      {/* <RegisterPage /> */}

      <LoginPage />
      {/* <Home /> */}
    </div>
  );
}

export default App;
