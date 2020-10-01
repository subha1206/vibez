import React from 'react';
import './login.styles.scss';
import Header from '../../components/common/Header';
import { ReactComponent as Welcome } from '../../assets/img/illustrations/login_illustartion.svg';

import LoginForm from '../../components/login/loginForm';

const LoginPage = () => {
  return (
    <div className="login-page-container">
      <Header />
      <div className="login-page-container__content">
        <div className="login-page-container__content__main">
          <div className="login-page-container__content__main__intro">
            <Welcome />
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
