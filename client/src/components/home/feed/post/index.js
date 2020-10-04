import React from 'react';
import { ReactComponent as More } from '../../../../assets/img/common/more.svg';
import { ReactComponent as Heart } from '../../../../assets/img/common/heart.svg';
import { ReactComponent as Comments } from '../../../../assets/img/common/comments.svg';
import './post.styles.scss';

// components
import UserDetails from '../../../common/userDetails';

const Post = () => {
  return (
    <div className="post-container">
      <div className="post-container__info">
        <UserDetails />
        <div className="post-container__info__icon">
          <More />
        </div>
      </div>
      <div className="post-container__content">
        <div className="post-container__content__text">
          <h2>Some header goes here</h2>
          <p>
            Some caption about the picture In this article we are discussing the
            Calender Application Project using C. We all have smartphones and
            laptops in which there is a calendar application present which gives
            the daily update about date and day. But do you know, how it works?
            This article will give you a basic overview of How to make a
            calendar application using C programming.
          </p>
        </div>
        <div className="post-container__content__image"></div>
      </div>
      <div className="post-container__cta">
        <div className="post-container__cta__heart">
          <Heart />
        </div>
        <div className="post-container__cta__comment">
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default Post;
