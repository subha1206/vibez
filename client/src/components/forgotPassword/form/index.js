import React from 'react';
import Button from '../../common/Button';

import './form.styles.scss';

const ForgotpasswordForm = () => {
  return (
    <div className="forgot-password-form-container">
      <div className="forgot-password-form-container__content">
        <p>Forgot Your password? no issues! just enter your email bellow</p>
      </div>
      <div className="forgot-password-form-container__inputs">
        <input type="email" name="user_email" id="" placeholder="Email" />
      </div>

      <div className="forgot-password-form-container__button">
        <Button color={'red'} value={'Reset password'} />
      </div>
    </div>
  );
};

export default ForgotpasswordForm;
