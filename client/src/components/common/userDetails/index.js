import React from 'react';

import './userDetails.scss';
import UserImage from '../../home/profile/userImage';
const UserDetails = () => {
  return (
    <div className="user-details-container">
      <UserImage size="small" />
      <div className="user-details-container__info">
        <p>Username username</p>
        <p className="user-details-container__info__time">15 min ago</p>
      </div>
    </div>
  );
};

export default UserDetails;
