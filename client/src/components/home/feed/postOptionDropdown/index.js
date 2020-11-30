import React from 'react';
import './postOptionDropdown.styles.scss';
import { ReactComponent as AddFriend } from '../../../../assets/img/common/add-friend.svg';
import { ReactComponent as SendMessage } from '../../../../assets/img/common/send.svg';
import { deletePost } from '../../../../redux/actions/postActions';
import { useDispatch } from 'react-redux';

const PostOptionDropdown = ({ ownPost, postId, handleDropDown }) => {
  const dispatch = useDispatch();

  const handleDeletePost = () => {
    dispatch(deletePost(postId, handleDropDown));
  };

  return (
    <div className="post-option-dropdown-container">
      <div className="post-option-dropdown-container__item">
        <div className="post-option-dropdown-container__item__icon">
          <AddFriend />
        </div>
        <div className="post-option-dropdown-container__item__text">
          {ownPost ? <p>Edit post</p> : <p>Follow</p>}
        </div>
      </div>
      <div className="post-option-dropdown-container__item">
        <div className="post-option-dropdown-container__item__icon">
          <SendMessage />
        </div>
        <div className="post-option-dropdown-container__item__text">
          {ownPost ? <p onClick={handleDeletePost}>Delete post</p> : null}
        </div>
      </div>
    </div>
  );
};

export default PostOptionDropdown;
