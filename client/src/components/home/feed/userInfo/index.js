import React from 'react';

import './userInfo.styles.scss';

import UserImage from '../../profile/userImage';
import Tags from '../../../common/tags';

const UserInfo = ({ user }) => {
  console.log(user.user);
  return (
    <div className="user-info-container">
      <div className="user-info-container__profile">
        <div className="user-info-container__profile__image">
          <UserImage />
          <div className="user-info-container__profile__image__info">
            <h3>{user.user?.name}</h3>
            <p>{user.user?.email}</p>
          </div>
        </div>
        <div className="user-info-container__profile__cta">
          <p>Add friend</p>
        </div>

        <div className="user-info-container__profile__tags">
          <p className="user-info-container__profile__tags__title">Interests</p>
          <div className="user-info-container__profile__tags__container">
            {user.user?.tags.map((tag) => {
              return (
                <div className="user-info-container__profile__tags__container__item">
                  <Tags value={tag} color="green" />
                </div>
              );
            })}

            <div className="user-info-container__profile__tags__container__item">
              <Tags value={'hello'} color="green" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
