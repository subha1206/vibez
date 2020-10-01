import React from 'react';
import { ReactComponent as LogoWeb } from '../../../assets/img/logo/web_logo.svg';
import { ReactComponent as NotiBell } from '../../../assets/img/header/bell_20X20.svg';
import { ReactComponent as Menu } from '../../../assets/img/header/menu_20X20.svg';
import { ReactComponent as LogOut } from '../../../assets/img/header/logout_20X20.svg';
import dummyUser from '../../../assets/img/header/dummyUser.png';

import './header.styles.scss';

const Header = ({ isLoggedIn }) => {
  return (
    <div className="main-header">
      <div className="main-header__logo">
        <LogoWeb />
      </div>
      <div className="main-header__content">
        {isLoggedIn ? (
          <>
            <img src={dummyUser} alt="user" />
            <NotiBell />
            <Menu />
            <LogOut />
          </>
        ) : (
          <>
            <p>Login</p>
            <p>Register</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
