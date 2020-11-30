import React, { useState } from 'react';
import { isEmail } from 'validator';
import Button from '../../common/Button';
import { useHistory } from 'react-router-dom';
import { forgotPassword } from '../../../redux/actions/authAction';
import { useDispatch } from 'react-redux';

import './form.styles.scss';

const ForgotpasswordForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    email: '',
  });

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

  const handleForgotPassword = () => {
    const emailErr = validateEmail();

    if (emailErr === '') {
      setIsLoading(true);
      dispatch(forgotPassword(user, history, setIsLoading));
    }
  };

  return (
    <div className="forgot-password-form-container">
      <div className="forgot-password-form-container__content">
        <p>Forgot Your password? just enter your email bellow</p>
      </div>
      <div className="forgot-password-form-container__inputs">
        <p className="forgot-password-form-container__inputs__error--email">
          {emailError}
        </p>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
          onBlur={validateEmail}
        />
      </div>

      <div
        className="forgot-password-form-container__button"
        onClick={!isLoading ? handleForgotPassword : null}
      >
        {isLoading ? (
          <Button color="blue" value="Please wait.." loading={true} />
        ) : (
          <Button color="red" value="Reset password" />
        )}
      </div>
    </div>
  );
};

export default ForgotpasswordForm;
