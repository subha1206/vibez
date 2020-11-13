import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../common/Button';
import sendApiRequest from '../../../helper/sendApiRequest';

import './loginForm.scss';

const LoginForm = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const handleLogin = () => {
    sendApiRequest
      .post('/users/login', user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="login-form-container">
      <div className="login-form-container__inputs">
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
        />
      </div>
      <div className="login-form-container__options">
        <p>Forgot password</p>
        <p>New here? Create account</p>
      </div>
      <div className="login-form-container__button" onClick={handleLogin}>
        <Button color={'blue'} value={'Login'} />
      </div>
    </div>
  );
};

export default LoginForm;
