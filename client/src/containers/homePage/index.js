import React from 'react';
import { ReactComponent as Plus } from '../../assets/img/common/add.svg';
import { ReactComponent as Friends } from '../../assets/img/common/friends.svg';
import { ReactComponent as Post } from '../../assets/img/common/posts.svg';
import './home.styles.scss';
import UserImage from '../../components/home/profile/userImage';
import Tags from '../../components/common/tags';
import RecentLiked from '../../components/home/recent/recentLikePost';

const Home = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-container__profile">
        <div className="homepage-container__profile__image">
          <UserImage />
          <div className="homepage-container__profile__image__icon">
            <Plus />
          </div>
        </div>
        <h3>Username username</h3>
        <div className="homepage-container__profile__stat">
          <div className="homepage-container__profile__stat__item">
            <div className="homepage-container__profile__stat__item__info">
              <Friends />
              <p className="info">Friends</p>
              <p>10</p>
            </div>
            <p className="add">Add Friends</p>
          </div>
          <div className="homepage-container__profile__stat__item">
            <div className="homepage-container__profile__stat__item__info">
              <Post />
              <p className="info">Posts</p>
              <p>5</p>
            </div>
            <p className="add">Add Post</p>
          </div>
        </div>
        <div className="homepage-container__profile__tags">
          <div className="homepage-container__profile__tags-container">
            <div className="homepage-container__profile__tags-container__item">
              <Tags color="green" value="React" />{' '}
            </div>
            <div className="homepage-container__profile__tags-container__item">
              <Tags color="green" value="React" />{' '}
            </div>
            <div className="homepage-container__profile__tags-container__item">
              <Tags color="green" value="React" />{' '}
            </div>
            <div className="homepage-container__profile__tags-container__item">
              <Tags color="green" value="React" />{' '}
            </div>
          </div>
          <div className="homepage-container__profile__tags__add">
            <p>Add tags</p>{' '}
          </div>
        </div>
      </div>
      <div className="homepage-container__feed"></div>
      <div className="homepage-container__recent">
        <div className="homepage-container__recent__post-container">
          <RecentLiked />
          <RecentLiked />
        </div>
      </div>
    </div>
  );
};

export default Home;
