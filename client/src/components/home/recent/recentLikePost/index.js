import React from 'react';

import './recentLike.styles.scss';
import UserImage from '../../profile/userImage';
import UserDetails from '../../../common/userDetails';

const RecentLiked = () => {
  return (
    <div className="recent-liked-post-container">
      <UserDetails />
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
