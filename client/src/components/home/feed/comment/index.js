import React from 'react';
import './comment.styles.scss';
import UserDetails from '../../../common/userDetails';
const Comment = () => {
  return (
    <div className="comment-container">
      <UserDetails />
      <div className="comment-container__content">
        <p>
          The idea is quite intertesting, lets talk about the project and we can
          plan accordingly
        </p>
      </div>
      <div className="comment-container__cta"></div>
    </div>
  );
};

export default Comment;
