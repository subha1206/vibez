import React from 'react';

// import { ReactComponent as Welcome } from '../../assets/img/illustrations/welcome.svg';
import welcome from '../../assets/img/illustrations/welcome.gif';
import './welcomepage.styles.scss';

import Button from '../../components/common/Button';
const WelcomePage = () => {
  return (
    <div className="welcome-page-container">
      <div className="welcome-page-container__illus">
        <img src={welcome} alt="welcome animation" />
      </div>
      <div className="welcome-page-container__content">
        <h1>Welcome!</h1>
      </div>
      <div className="welcome-page-container__cta">
        <div className="welcome-page-container__cta__btn">
          <Button color="blue" value="Create Post" />
        </div>
        <div className="welcome-page-container__cta__btn">
          <Button color="green" value="Go to profile" />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
