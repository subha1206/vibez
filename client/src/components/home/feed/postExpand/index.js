import React, { useState } from 'react';
import './postexpand.styles.scss';
import { ReactComponent as Back } from '../../../../assets/img/common/left-arrow.svg';
// import { ReactComponent as Heart } from '../../../../assets/img/common/heart.svg';
// import { ReactComponent as CommentIcon } from '../../../../assets/img/common/comments.svg';

import { createComment } from '../../../../redux/actions/postActions';
import { useDispatch } from 'react-redux';

import UserDetails from '../../../common/userDetails';
import Comment from '../comment';
// import PostOptionDropdown from '../postOptionDropdown';

const PostExpand = ({ setExpandPost, currentPost }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState({
    comment: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setComment({
      comment: value,
    });
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    dispatch(createComment(currentPost?._id, comment));
  };

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
            <h3>{currentPost?.title}</h3>
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
        {/* <div className="post-expand-container__content__stat">
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
        </div> */}
        <div className="post-expand-container__content__comment--box">
          <form>
            <input type="text" name="comment" id="" onChange={handleChange} />
            <button type="submit" onClick={handleAddComment}>
              Comment
            </button>
          </form>
        </div>

        <div className="post-expand-container__content__comments">
          <h4>Comments...</h4>
          {currentPost?.comments.map((comment) => {
            return <Comment key={comment.id} comment={comment} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PostExpand;
