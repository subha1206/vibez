import React from 'react';

import './userInfo.styles.scss';

import UserImage from '../../profile/userImage';
import Tags from '../../../common/tags';

const UserInfo = () => {
  return (
    <div className="user-info-container">
      <div className="user-info-container__profile">
        <div className="user-info-container__profile__image">
          <UserImage />
          <div className="user-info-container__profile__image__info">
            <h3>Username username</h3>
            <p>joined {new Date().getDate()}</p>
          </div>
        </div>
        <div className="user-info-container__profile__cta">
          <p>Add friend</p>
        </div>

        <div className="user-info-container__profile__tags">
          <p className="user-info-container__profile__tags__title">Interests</p>
          <div className="user-info-container__profile__tags__container">
            <div className="user-info-container__profile__tags__container__item">
              <Tags value={'hello'} color="green" />
            </div>
            <div className="user-info-container__profile__tags__container__item">
              <Tags value={'hello'} color="green" />
            </div>
            <div className="user-info-container__profile__tags__container__item">
              <Tags value={'hello'} color="green" />
            </div>
            <div className="user-info-container__profile__tags__container__item">
              <Tags value={'hello'} color="green" />
            </div>
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
