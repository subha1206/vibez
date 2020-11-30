import React, { useState, useEffect } from 'react';
import { ReactComponent as Plus } from '../../assets/img/common/add.svg';
import { ReactComponent as Friends } from '../../assets/img/common/friends.svg';
import { ReactComponent as PostSvg } from '../../assets/img/common/posts.svg';
import UserImage from '../../components/home/profile/userImage';
import RecentLiked from '../../components/home/recent/recentLikePost';
import Post from '../../components/home/feed/post';
import PostExpand from '../../components/home/feed/postExpand';
import AddPost from '../../components/form/addPost';
import AddFrinedAndTags from '../../components/form/addTagsAndFriends';
import {
  getMe,
  getRecentActivity,
  getUserFeed,
} from '../../redux/actions/userAction';
import { getOnePost } from '../../redux/actions/postActions';
import {
  showMe,
  showAddFollow,
  showAddPost,
} from '../../redux/actions/UIAction';

import { useDispatch, shallowEqual, useSelector } from 'react-redux';
// import PostOptionDropdown from '../../components/home/feed/postOptionDropdown';
import UserInfo from '../../components/home/feed/userInfo';

import './home.styles.scss';

const Home = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth?.user, shallowEqual);
  const currentPost = useSelector(
    (state) => state.post?.currentPost?.data,
    shallowEqual
  );
  const recentActs = useSelector(
    (state) => state.user?.recentActivity,
    shallowEqual
  );
  const feed = useSelector((state) => state.user?.feed, shallowEqual);
  const showMe = useSelector((state) => state.UI?.showMe, shallowEqual);
  const showAddPostModal = useSelector(
    (state) => state.UI?.addPost,
    shallowEqual
  );
  const showAddFollowModal = useSelector(
    (state) => state.UI?.addFollow,
    shallowEqual
  );
  console.log(user);

  const [expandPost, setExpandPost] = useState(false);
  const [expandUser, setExpandUser] = useState(false);

  const getPost = (postId) => {
    dispatch(getOnePost(postId, setExpandPost));
  };

  const handleShowAddPost = () => {
    dispatch(showAddPost());
  };

  const handleShowAddFriends = () => {
    dispatch(showAddFollow());
  };

  const showFeed = () => {
    if (expandUser) {
      return <UserInfo user={user} />;
    } else if (expandPost) {
      return (
        <PostExpand setExpandPost={setExpandPost} currentPost={currentPost} />
      );
    } else {
      return (
        <>
          {feed?.map((post) => {
            return <Post key={post.id} getPost={getPost} post={post} />;
          })}
        </>
      );
    }
  };

  useEffect(() => {
    dispatch(getMe());
    dispatch(getRecentActivity());
    dispatch(getUserFeed());
  }, []);

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
          <h3>{user?.name}</h3>
          <div className="homepage-container__profile__stat">
            <div className="homepage-container__profile__stat__item">
              <div className="homepage-container__profile__stat__item__info">
                <Friends />
                <p className="info">Followers</p>
                <p>{user?.followers.length}</p>
              </div>
            </div>
            <div className="homepage-container__profile__stat__item">
              <div className="homepage-container__profile__stat__item__info">
                <Friends />
                <p className="info">Following</p>
                <p>{user?.following.length}</p>
              </div>
              <p className="add" onClick={handleShowAddFriends}>
                Follow
              </p>
            </div>
            <div className="homepage-container__profile__stat__item">
              <div className="homepage-container__profile__stat__item__info">
                <PostSvg />
                <p className="info">Posts</p>
                {/* <p>{user?.posts.length}</p> */}
              </div>
              <p className="add" onClick={handleShowAddPost}>
                Add Post
              </p>
            </div>
          </div>
        </div>
        <div
          className={`homepage-container__feed ${
            expandPost ? 'scroll_hide' : ''
          }`}
        >
          {showFeed()}
        </div>
        <div className="homepage-container__recent">
          <div className="homepage-container__recent__post-container">
            {recentActs?.map((post) => {
              return (
                <RecentLiked key={post.id} post={post} getPost={getPost} />
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={`${
          showAddPostModal || showAddFollowModal ? 'back-drop' : ''
        }`}
      >
        {showAddPostModal ? (
          <AddPost handleShowAddPost={handleShowAddPost} />
        ) : null}
        {showAddFollowModal ? (
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
