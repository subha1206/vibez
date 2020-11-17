import React, { useState } from 'react';
import { isEmail } from 'validator';
import Button from '../../common/Button';
import { useHistory } from 'react-router-dom';
import API_END_POINTS from '../../../services/apiEndpoints';
import notify from '../../../helper/notify';
import sendApiRequest from '../../../helper/sendApiRequest';

// USER_REGISTER
import './registerForm.styles.scss';

const RegisterForm = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const validateEmail = () => {
    if (!isEmail(user.email) || user.email === '') {
      setEmailError('Please provide a valid email!');
      return 'error';
    } else {
      setEmailError('');
      return '';
    }
  };
  const validateName = () => {
    if (user.name === '') {
      setNameError('Required field!');
      return 'error';
    } else {
      setNameError('');
      return '';
    }
  };

  const validatePassword = () => {
    if (user.password === '') {
      setPasswordError('Required field!');
      return 'error';
    } else if (user.password.length < 8) {
      setPasswordError('Password should be 8 char long!');
      return 'error';
    } else {
      setPasswordError('');
      return '';
    }
  };

  const validatePasswordConfirm = () => {
    if (user.passwordConfirm === '') {
      setPasswordConfirmError('Required field!');
      return 'error';
    } else if (user.password !== user.passwordConfirm) {
      setPasswordConfirmError('Password did not match!');
      return 'error';
    } else {
      setPasswordConfirmError('');
      return '';
    }
  };

  const handleRegister = async () => {
    const emailErr = validateEmail();
    const nameErr = validateName();
    const passwordErr = validatePassword();
    const passwordConfirmErr = validatePasswordConfirm();

    if (
      emailErr === '' &&
      nameErr === '' &&
      passwordErr === '' &&
      passwordConfirmErr === ''
    ) {
      setIsLoading(true);
      try {
        const res = await sendApiRequest.post(
          API_END_POINTS.USER_REGISTER,
          user
        );
        notify(res.data.status, 'Sign up successfull');
        setIsLoading(false);
        if (res.data.status === 'success') {
          localStorage.setItem('jwt', res.data.token);
          history.push('/welcome');
        }
      } catch (err) {
        notify(err.response.data.status, err.response.data.message);
        setIsLoading(false);
      }
    }
  };

  const redirectToLogin = () => {
    history.push('/login');
  };
  return (
    <div className="register-form-container">
      <div className="register-form-container__inputs">
        <p className="register-form-container__inputs__error--name">
          {nameError}
        </p>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          onChange={handleChange}
          onBlur={validateName}
          value={user.name}
        />
        <p className="register-form-container__inputs__error--email">
          {emailError}
        </p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={validateEmail}
          value={user.email}
        />
        <p className="register-form-container__inputs__error--password">
          {passwordError}
        </p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          onBlur={validatePassword}
          value={user.password}
        />
        <p className="register-form-container__inputs__error--passwordConfirm">
          {passwordConfirmError}
        </p>
        <input
          type="password"
          name="passwordConfirm"
          id=""
          placeholder="Retype password"
          onChange={handleChange}
          onBlur={validatePasswordConfirm}
          value={user.passwordConfirm}
        />
      </div>
      <div
        className="register-form-container__options"
        onClick={redirectToLogin}
      >
        <p>Already have an account?</p>
      </div>
      <div
        className="register-form-container__button"
        onClick={!isLoading ? handleRegister : null}
      >
        {isLoading ? (
          <Button color="blue" value="Please wait.." loading={true} />
        ) : (
          <Button color="blue" value="Register" />
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
