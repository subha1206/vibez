import React from 'react';

import './userDetails.scss';
import UserImage from '../../home/profile/userImage';
const UserDetails = ({ user }) => {
  return (
    <div className="user-details-container">
      <UserImage size="small" />
      <div className="user-details-container__info">
        <p>{user?.name || 'User name'}</p>
        <p className="user-details-container__info__time">15 min ago</p>
      </div>
    </div>
  );
};

export default UserDetails;
