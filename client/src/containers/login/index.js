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
            <h2>Can't do it in real life? Do it on login!</h2>
            <div className="login-page-container__content__main__intro--svg">
              <Login />
            </div>
          </div>
          <div className="login-page-container__content__main__CTA">
            <div className="login-page-container__content__main__CTA--info">
              <h2>Login</h2>
            </div>
            <div className="login-page-container__content__main__CTA--form">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
