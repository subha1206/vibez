import React from 'react';
import { ReactComponent as Home } from '../../../../assets/img/header/Home.svg';
import { ReactComponent as AddFiend } from '../../../../assets/img/header/add_friends.svg';
import { ReactComponent as CreatePost } from '../../../../assets/img/header/edit.svg';
import { ReactComponent as Logout } from '../../../../assets/img/header/logout.svg';

import './dropdown.styles.scss';

const MenuDropDown = ({
  handleLogoutModal,
  handleMenuDropDown,
  handleShowAddPost,
  handleShowFollow,
}) => {
  return (
    <div className="header-dropdown-container">
      <ul>
        <li
          className="header-dropdown-container__item"
          onClick={() => {
            handleMenuDropDown();
          }}
        >
          <Home />
          <p>Home</p>
        </li>
        <li
          className="header-dropdown-container__item"
          onClick={handleShowFollow}
        >
          <AddFiend />
          <p>Follow humans</p>
        </li>
        <li
          className="header-dropdown-container__item"
          onClick={handleShowAddPost}
        >
          <CreatePost />
          <p>Create Post</p>
        </li>
        <li
          className="header-dropdown-container__item"
          onClick={() => {
            handleMenuDropDown();
            handleLogoutModal(true);
          }}
        >
          <Logout />
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
};

export default MenuDropDown;
