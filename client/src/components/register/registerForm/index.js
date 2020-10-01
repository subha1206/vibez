import React from 'react';
import Button from '../../common/Button';

import './registerForm.styles.scss';

const RegisterForm = () => {
  return (
    <div className="register-form-container">
      <div className="register-form-container__inputs">
        <input type="email" name="user_email" id="" placeholder="Email" />
        <input
          type="password"
          name="user_password"
          id=""
          placeholder="Password"
        />
        <input
          type="password"
          name="user_password_confirm"
          id=""
          placeholder="Retype password"
        />
      </div>
      <div className="register-form-container__options">
        <p>Already have an account?</p>
      </div>
      <div className="register-form-container__button">
        <Button color={'blue'} value={'Register'} />
      </div>
    </div>
  );
};

export default RegisterForm;
