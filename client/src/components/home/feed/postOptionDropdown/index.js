import React from 'react';
import './postOptionDropdown.styles.scss';
import { ReactComponent as AddFriend } from '../../../../assets/img/common/add-friend.svg';
import { ReactComponent as SendMessage } from '../../../../assets/img/common/send.svg';

const PostOptionDropdown = () => {
  return (
    <div className="post-option-dropdown-container">
      <div className="post-option-dropdown-container__item">
        <div className="post-option-dropdown-container__item__icon">
          <AddFriend />
        </div>
        <div className="post-option-dropdown-container__item__text">
          <p>Add Friend</p>
        </div>
      </div>
      <div className="post-option-dropdown-container__item">
        <div className="post-option-dropdown-container__item__icon">
          <SendMessage />
        </div>
        <div className="post-option-dropdown-container__item__text">
          <p>Send message</p>
        </div>
      </div>
    </div>
  );
};

export default PostOptionDropdown;
