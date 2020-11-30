import React, { useState } from 'react';
import { isEmail } from 'validator';
import Button from '../../common/Button';
import { useHistory } from 'react-router-dom';
import { login } from '../../../redux/actions/authAction';
import { useDispatch } from 'react-redux';

import './loginForm.scss';

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const validatePassword = () => {
    if (user.password !== '') {
      setPasswordError('');
    } else {
      setPasswordError('Required flied');
    }
  };
  const validateEmail = () => {
    if (!isEmail(user.email) || user.email === '') {
      setEmailError('Please provide a valid email');
    } else {
      setEmailError('');
    }
  };

  const handleLogin = () => {
    if (user.email !== '' && user.password !== '') {
      setIsLoading(true);
      dispatch(login(user, history, setIsLoading));
    } else {
      if (user.email === '') setEmailError('Required flied');
      if (user.password === '') setPasswordError('Required flied');
    }
  };

  const redirectToRegister = () => {
    history.push('/register');
  };

  const redirectToForgotPassword = () => {
    history.push('/forgotPassword');
  };

  return (
    <div className="login-form-container">
      <div className="login-form-container__inputs">
        <p className="login-form-container__inputs--error__email">
          {emailError}
        </p>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
          onBlur={validateEmail}
        />
        <p className="login-form-container__inputs--error__password">
          {passwordError}
        </p>

        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          onBlur={validatePassword}
        />
      </div>
      <div className="login-form-container__options">
        <p onClick={redirectToForgotPassword}>Forgot password</p>
        <p onClick={redirectToRegister}>New here? Create account</p>
      </div>
      <div
        className="login-form-container__button"
        onClick={
          isLoading || passwordError !== '' || emailError !== ''
            ? null
            : handleLogin
        }
      >
        {isLoading || passwordError !== '' || emailError !== '' ? (
          <Button
            color="blue"
            value={`${
              passwordError !== '' || emailError !== ''
                ? 'Login'
                : 'Please wait..'
            }`}
            loading={true}
          />
        ) : (
          <Button color="blue" value="Login" />
        )}
      </div>
    </div>
  );
};

export default LoginForm;
