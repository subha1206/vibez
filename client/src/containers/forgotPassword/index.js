import React from 'react';
import { ReactComponent as Forgot } from '../../assets/img/illustrations/forgot_pass_illustration.svg';
import ForgotpasswordForm from '../../components/forgotPassword/form';

import './forgotpassword.styles.scss';
const ForgotPasswordPage = () => {
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-container__content">
        <div className="forgot-password-container__content__main">
          <div className="forgot-password-container__content__main__svg">
            <Forgot />
          </div>
          <ForgotpasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
