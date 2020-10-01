import React from 'react';
import Button from '../../common/Button';

import './loginForm.scss';

const LoginForm = () => {
  return (
    <div className="login-form-container">
      <div className="login-form-container__inputs">
        <input type="email" name="user_email" id="" placeholder="Email" />
        <input
          type="password"
          name="user_password"
          id=""
          placeholder="Password"
        />
      </div>
      <div className="login-form-container__options">
        <p>Forgot password</p>
        <p>New here? Create account</p>
      </div>
      <div className="login-form-container__button">
        <Button color={'blue'} value={'Login'} />
      </div>
    </div>
  );
};

export default LoginForm;
