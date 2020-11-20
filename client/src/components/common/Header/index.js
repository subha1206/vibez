import React, { useState } from 'react';
import { ReactComponent as LogoWeb } from '../../../assets/img/logo/web_logo.svg';
import { ReactComponent as NotiBell } from '../../../assets/img/header/bell_20X20.svg';
import { ReactComponent as Menu } from '../../../assets/img/header/menu_20X20.svg';
import { ReactComponent as LogOut } from '../../../assets/img/header/logout_20X20.svg';
import dummyUser from '../../../assets/img/header/dummyUser.png';

import MenuDropDown from './dropdown/menuDropDown';
import LogoutModal from '../Modal/logoutModal';

import './header.styles.scss';

const Header = ({ isLoggedIn }) => {
  const [menuDropDown, setMenuDropDown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutModal = (opt) => {
    if (opt !== undefined) {
      setShowLogoutModal(opt);
    } else {
      setShowLogoutModal(!showLogoutModal);
    }
  };

  const handleMenuDropDown = () => {
    setMenuDropDown(!menuDropDown);
  };

  return (
    <div className="main-header">
      <div className="main-header__logo">
        <LogoWeb />
      </div>

      <div className="main-header__content">
        {isLoggedIn ? (
          <>
            <div className="main-header__content__item">
              <div className="main-header__content__item__icon">
                <img src={dummyUser} alt="user" />
              </div>
            </div>
            <div className="main-header__content__item">
              <div className="main-header__content__item__icon">
                <NotiBell />
              </div>
            </div>
            <div className="main-header__content__item">
              <div
                onClick={() => {
                  handleMenuDropDown();
                  handleLogoutModal(false);
                }}
                className="main-header__content__item__icon"
              >
                <Menu />
              </div>

              {menuDropDown ? (
                <MenuDropDown
                  handleLogoutModal={handleLogoutModal}
                  handleMenuDropDown={handleMenuDropDown}
                />
              ) : null}
              {showLogoutModal ? (
                <LogoutModal
                  name={'Logout'}
                  content={'Are your sure to log out?'}
                  hideModal={handleLogoutModal}
                />
              ) : null}
            </div>

            {/* <LogOut /> */}
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
