import React, { useState } from 'react';
import { ReactComponent as Plus } from '../../assets/img/common/add.svg';
import { ReactComponent as Friends } from '../../assets/img/common/friends.svg';
import { ReactComponent as PostSvg } from '../../assets/img/common/posts.svg';
import './home.styles.scss';
import UserImage from '../../components/home/profile/userImage';
import Tags from '../../components/common/tags';
import RecentLiked from '../../components/home/recent/recentLikePost';
import Post from '../../components/home/feed/post';
import PostExpand from '../../components/home/feed/postExpand';
import AddPost from '../../components/form/addPost';
import AddFrinedAndTags from '../../components/form/addTagsAndFriends';

import PostOptionDropdown from '../../components/home/feed/postOptionDropdown';
import UserInfo from '../../components/home/feed/userInfo';

const Home = () => {
  const [uiState, setUistate] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleUIState = () => {
    setUistate(!uiState);
  };

  const handleShowAddPost = () => {
    setShowAddPost(!showAddPost);
  };

  const handleShowAddFriends = () => {
    setShowAddFriend(!showAddFriend);
  };
  return (
    <>
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
              <p className="add" onClick={handleShowAddFriends}>
                Add Friends
              </p>
            </div>
            <div className="homepage-container__profile__stat__item">
              <div className="homepage-container__profile__stat__item__info">
                <PostSvg />
                <p className="info">Posts</p>
                <p>5</p>
              </div>
              <p className="add" onClick={handleShowAddPost}>
                Add Post
              </p>
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
        <div
          className={`homepage-container__feed ${uiState ? 'scroll_hide' : ''}`}
        >
          {/* <Post />
        <Post /> */}

          {uiState ? (
            <PostExpand handleUIState={handleUIState} />
          ) : (
            <>
              <Post handleUIState={handleUIState} />
              <UserInfo />
            </>
          )}
        </div>
        <div className="homepage-container__recent">
          <div className="homepage-container__recent__post-container">
            <RecentLiked />
            <RecentLiked />
            <RecentLiked />
            <RecentLiked />
            <RecentLiked />
            <RecentLiked />
            <RecentLiked />
            <RecentLiked />
            <RecentLiked />
            <RecentLiked />
          </div>
        </div>
      </div>
      <div className={`${showAddPost || showAddFriend ? 'back-drop' : ''}`}>
        {showAddPost ? <AddPost handleShowAddPost={handleShowAddPost} /> : null}
        {showAddFriend ? (
          <AddFrinedAndTags
            handleShowAddFriends={handleShowAddFriends}
            name="Add Friends"
          />
        ) : null}
      </div>
    </>
  );
};

export default Home;
