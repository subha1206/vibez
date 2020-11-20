import React from 'react';

import { ReactComponent as Close } from '../../../assets/img/common/error 2.svg';
import Dropzone from '../../common/dropzone';
import './addPost.styles.scss';

const AddPost = ({ handleShowAddPost }) => {
  return (
    <div className="add-post-container">
      <div className="add-post-container__info">
        <h3>Add Post</h3>
        <div
          className="add-post-container__info__icon"
          onClick={handleShowAddPost}
        >
          <Close />
        </div>
      </div>
      <div className="add-post-container__content">
        <form action="#">
          <div className="add-post-container__content__main">
            <div className="add-post-container__content__right">
              <div className="add-post-container__content__right__container">
                <label htmlFor="title">Post Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter your post title.."
                  style={{ marginBottom: '1rem' }}
                />
              </div>
              <div className="add-post-container__content__right__container">
                <label htmlFor="tags">Tags</label>
                <textarea
                  style={{ height: '5rem' }}
                  type="text"
                  name="tags"
                  id="tags"
                />
              </div>
            </div>
            <div className="add-post-container__content__left">
              <Dropzone />
            </div>
          </div>
          <p className="lable-write">Describe your thought</p>
          <textarea name="write" id="write" cols="30" rows="8"></textarea>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
