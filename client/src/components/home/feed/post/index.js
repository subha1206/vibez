import React, { useState, useEffect } from 'react';
import { ReactComponent as More } from '../../../../assets/img/common/more.svg';
import { ReactComponent as Heart } from '../../../../assets/img/common/heart.svg';
import { ReactComponent as Comments } from '../../../../assets/img/common/comments.svg';
import './post.styles.scss';
import { shallowEqual, useSelector } from 'react-redux';
import { like, disLike } from '../../../../redux/actions/postActions';
import { useDispatch } from 'react-redux';

// components
import UserDetails from '../../../common/userDetails';
import PostOptionDropdown from '../postOptionDropdown';

const Post = ({ getPost, post }) => {
  const dispatch = useDispatch();

  const [postDropDown, setPostdropDown] = useState(false);
  const [ownPost, setOwnPost] = useState(false);
  const [postSingle] = useState(post);

  const userId = useSelector((state) => state.auth.user._id, shallowEqual);
  const handleDropDown = () => {
    setPostdropDown(!postDropDown);
  };

  const handleLike = () => {
    dispatch(like(post?._id));
  };
  const handleDisLike = () => {
    dispatch(disLike(post?._id));
  };

  useEffect(() => {
    if (post?.author.id === userId) setOwnPost(true);
    return () => {};
  }, [postSingle]);

  return (
    <div className="post-container">
      <div className="post-container__info">
        <UserDetails />
        <div className="post-container__info__icon" onClick={handleDropDown}>
          <More />
        </div>
      </div>
      <div className="post-container__content">
        <div className="post-container__content__text">
          <h2>{post?.title}</h2>
          <p>{post?.description}</p>
        </div>
      </div>
      <div className="post-container__dropdown">
        {postDropDown && (
          <PostOptionDropdown
            ownPost={ownPost}
            postId={post?._id}
            handleDropDown={handleDropDown}
          />
        )}
      </div>
      <div className="post-container__cta">
        <div className="post-container__cta__heart">
          <Heart onClick={handleLike} />
          <div className="post-container__cta__heart__count">23</div>
        </div>
        <div
          className="post-container__cta__comment"
          onClick={() => getPost(post?._id)}
        >
          <Comments />
          <div className="post-container__cta__comment__count">23</div>
        </div>
      </div>
      <div
        className="post-container__show-more"
        onClick={() => getPost(post?._id)}
      >
        <p>Show more</p>
      </div>
    </div>
  );
};

export default Post;
