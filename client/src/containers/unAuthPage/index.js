import React from 'react';

import UnAuth from '../../assets/img/illustrations/401_error_unauthorized.gif';
import './unAuthorized.styles.scss';

import Button from '../../components/common/Button';
const UnAuthPage = () => {
  return (
    <div className="unauth-container">
      <div className="unauth-container__illus">
        <img src={UnAuth} alt="welcome animation" />
      </div>
      <div className="unauth-container__content">
        <h1>Welcome!</h1>
      </div>
      <div className="unauth-container__cta">
        <div className="unauth-container__cta__btn">
          <Button color="blue" value="Create Post" />
        </div>
        <div className="unauth-container__cta__btn">
          <Button color="green" value="Go to profile" />
        </div>
      </div>
    </div>
  );
};

export default UnAuthPage;
