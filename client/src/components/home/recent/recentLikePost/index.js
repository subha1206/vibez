import React from 'react';

import './recentLike.styles.scss';
import UserImage from '../../profile/userImage';
import UserDetails from '../../../common/userDetails';

const RecentLiked = ({ post, getPost }) => {
  console.log(post);
  return (
    <div className="recent-liked-post-container">
      <UserDetails user={post?.author} />
      <div className="recent-liked-post-container__title">
        <p>{post?.title}</p>
      </div>
      <div className="recent-liked-post-container__cta">
        <p onClick={() => getPost(post?._id)}>show more</p>
      </div>
    </div>
  );
};

export default RecentLiked;
