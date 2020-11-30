import React from 'react';
import './comment.styles.scss';
import UserDetails from '../../../common/userDetails';
const Comment = ({ comment }) => {
  return (
    <div className="comment-container">
      <UserDetails user={comment?.user} />
      <div className="comment-container__content">
        <p>{comment?.comment}</p>
      </div>
      <div className="comment-container__cta"></div>
    </div>
  );
};

export default Comment;
