import React, { useState } from 'react';
import { isEmail } from 'validator';
import Button from '../../components/common/Button';
import { useHistory, useLocation } from 'react-router-dom';
import API_END_POINTS from '../../services/apiEndpoints';
import notify from '../../helper/notify';
import sendApiRequest from '../../helper/sendApiRequest';

import { ReactComponent as ResetPass } from '../../assets/img/illustrations/settings.svg';
import './resetPassword.styles.scss';

const ResetPassword = () => {
  const history = useHistory();
  const location = useLocation();
  console.log();

  const [user, setUser] = useState({
    password: '',
    passwordConfirm: '',
  });
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

  const handleResetPassword = async () => {
    const passwordErr = validatePassword();
    const passwordConfirmErr = validatePasswordConfirm();

    if (passwordErr === '' && passwordConfirmErr === '') {
      setIsLoading(true);
      try {
        const res = await sendApiRequest.patch(
          API_END_POINTS.USER_RESET_PASSWORD +
            '/' +
            location.pathname.split('/')[2],
          user
        );
        notify(res.data.status, 'Password reset successfull!');
        setIsLoading(false);
        if (res.data.status === 'success') {
          localStorage.setItem('jwt', res.data.token);
          history.push('/');
        }
      } catch (err) {
        notify(err.response.data.status, err.response.data.message);
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="reset-password-page-container">
      <div className="reset-password-page-container__content">
        <div className="reset-password-page-container__content__main">
          <div className="reset-password-page-container__content__main__illus">
            <ResetPass />
          </div>
          <div className="reset-password-page-container__content__main__form">
            <form className="reset-pass-form">
              <p className="reset-pass-form__inputs__error--password">
                {passwordError}
              </p>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                value={user.password}
                onBlur={validatePassword}
              />
              <p className="reset-pass-form__inputs__error--passwordConfirm">
                {passwordConfirmError}
              </p>
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder="Confirm password"
                onChange={handleChange}
                value={user.passwordConfirm}
                onBlur={validatePasswordConfirm}
              />
            </form>
            <div
              className="reset-pass-form__button"
              onClick={!isLoading ? handleResetPassword : null}
            >
              {isLoading ? (
                <Button color="blue" value="Please wait.." loading={true} />
              ) : (
                <Button color="blue" value="Reset password" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
