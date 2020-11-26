import React from 'react';
import './postexpand.styles.scss';
import { ReactComponent as Back } from '../../../../assets/img/common/left-arrow.svg';
import { ReactComponent as Heart } from '../../../../assets/img/common/heart.svg';
import { ReactComponent as CommentIcon } from '../../../../assets/img/common/comments.svg';

import UserDetails from '../../../common/userDetails';
import Comment from '../comment';
import PostOptionDropdown from '../postOptionDropdown';

const PostExpand = ({ setExpandPost, currentPost }) => {
  console.log(currentPost?.author);
  return (
    <div className="post-expand-container">
      <div className="post-expand-container__content">
        <div
          className="post-expand-container__content__back"
          onClick={() => setExpandPost(false)}
        >
          <Back />
        </div>
        <div className="post-expand-container__content__user-info">
          <UserDetails user={currentPost?.author} />
          {/* <div
            className="post-expand-container__content__icon"
            onClick={handleDropDown}
          >
            <More />
          </div> */}
        </div>
        {/* <div className="post-expand-container__content__dropdown">
          {postDropDown ? <PostOptionDropdown /> : null}
        </div> */}
        <div className="post-expand-container__content__details">
          <div className="post-expand-container__content__details__text">
            <h2>{currentPost?.title}</h2>
            <p>{currentPost?.description}</p>
          </div>
          <div className="post-expand-container__content__details__image">
            {/* <img
              src="https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/10/nodejs.png?fit=1240%2C700&ssl=1"
              alt=""
              srcset=""
            /> */}
          </div>
        </div>
        <div className="post-expand-container__content__stat">
          <div className="post-expand-container__content__stat__icon">
            <Heart />
            <div className="post-expand-container__content__stat__icon__count">
              23
            </div>
          </div>
          <div className="post-expand-container__content__stat__icon">
            <CommentIcon />
            <div className="post-expand-container__content__stat__icon__count">
              15
            </div>
          </div>
        </div>
        <div className="post-expand-container__content__comments">
          <p>Comments...</p>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default PostExpand;
