import React, { useState } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import {
  showMe,
  showAddFollow,
  showAddPost,
} from '../../../redux/actions/UIAction';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoWeb } from '../../../assets/img/logo/web_logo.svg';
import { ReactComponent as NotiBell } from '../../../assets/img/header/bell_20X20.svg';
import { ReactComponent as Menu } from '../../../assets/img/header/menu_20X20.svg';
import { ReactComponent as LogOut } from '../../../assets/img/header/logout_20X20.svg';
import dummyUser from '../../../assets/img/header/dummyUser.png';

import MenuDropDown from './dropdown/menuDropDown';
import LogoutModal from '../Modal/logoutModal';

import './header.styles.scss';

const Header = () => {
  const dispatch = useDispatch();
  const [menuDropDown, setMenuDropDown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const isLoggedIn = useSelector(
    (state) => state.auth.isAuthenticated,
    shallowEqual
  );

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

  const handleShowAddPost = () => {
    handleMenuDropDown();
    dispatch(showAddPost());
  };

  const handleShowFollow = () => {
    handleMenuDropDown();
    dispatch(showAddFollow());
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
                  handleShowAddPost={handleShowAddPost}
                  handleShowFollow={handleShowFollow}
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
            <NavLink
              to="/"
              exact={true}
              style={{ textDecoration: 'none', color: 'black' }}
              activeStyle={{
                color: '#f03a47',
                textDecoration: 'underline',
              }}
            >
              <p>Login</p>
            </NavLink>
            <NavLink
              to="/register"
              style={{ textDecoration: 'none', color: 'black' }}
              activeStyle={{
                color: '#f03a47',
                textDecoration: 'underline',
              }}
            >
              <p>Register</p>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
