import React, { useState } from 'react';
import { createPost } from '../../../redux/actions/postActions';
import { useDispatch } from 'react-redux';
import { ReactComponent as Close } from '../../../assets/img/common/error 2.svg';
import Dropzone from '../../common/dropzone';
import Button from '../../common/Button';

import './addPost.styles.scss';

const AddPost = ({ handleShowAddPost }) => {
  const dispatch = useDispatch();

  const [post, setPost] = useState({
    title: '',
    description: '',
    tags: [],
  });

  const [titleError, setTitleError] = useState('');
  const [descError, setDescError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setPost({
      ...post,
      [e.target.name]: value,
    });
  };

  const validateTitle = () => {
    if (post.title === '') {
      setTitleError('Required field!');
      return 'error';
    } else {
      setTitleError('');
      return '';
    }
  };

  const validateDesc = () => {
    if (post.description === '') {
      setDescError('Required field!');
      return 'error';
    } else {
      setDescError('');
      return '';
    }
  };

  const handleCreatePost = () => {
    const titleErr = validateTitle();
    const descErr = validateDesc();

    if (titleErr === '' && descErr === '') {
      setIsLoading(true);
      dispatch(createPost(post, setIsLoading, handleShowAddPost));
    }
  };

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
                <p className="error__title">{titleError}</p>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter your post title.."
                  style={{ marginBottom: '1rem' }}
                  onChange={handleChange}
                  value={post.title}
                  onBlur={validateTitle}
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
          <p className="error__description">{descError}</p>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="8"
            onChange={handleChange}
            onBlur={validateDesc}
            value={post.description}
          ></textarea>
          <div
            className="add-post-container_CTA"
            onClick={!isLoading ? handleCreatePost : null}
          >
            {isLoading ? (
              <Button color="blue" value="Please wait.." loading={true} />
            ) : (
              <Button color="blue" value="Create" />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
