import React from 'react';
import './login.styles.scss';
import { ReactComponent as Login } from '../../assets/img/illustrations/rocket_launch__monochromatic.svg';

import LoginForm from '../../components/login/loginForm';

const LoginPage = () => {
  return (
    <div className="login-page-container">
      <div className="login-page-container__content">
        <div className="login-page-container__content__main">
          <div className="login-page-container__content__main__intro">
            <Login />
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
