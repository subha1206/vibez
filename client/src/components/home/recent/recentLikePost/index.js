import React from 'react';

import './recentLike.styles.scss';
import UserImage from '../../profile/userImage';

const RecentLiked = () => {
  return (
    <div className="recent-liked-post-container">
      <div className="recent-liked-post-container__user-container">
        <UserImage size="small" />
        <div className="recent-liked-post-container__user-container__info">
          <p>Username username</p>
          <p className="recent-liked-post-container__user-container__info__time">
            15 min ago
          </p>
        </div>
      </div>
      <div className="recent-liked-post-container__title">
        <p>This is a post title</p>
      </div>
      <div className="recent-liked-post-container__cta">
        <p>show more</p>
      </div>
    </div>
  );
};

export default RecentLiked;
