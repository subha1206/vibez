import postConstants from '../constants/postConstants';
import sendApiRequest from '../../helper/sendApiRequest';
import apiEndPoints from '../../services/apiEndpoints';
import notify from '../../helper/notify';

export const createPost = (post, setIsLoading, handleShowAddPost) => async (
  dispatch
) => {
  try {
    const res = await sendApiRequest.post(apiEndPoints.CREATE_POST, post);
    notify(res.data.status, res.data.message);
    setIsLoading(false);
    handleShowAddPost();
    dispatch({ type: postConstants.CREATE_POST });
  } catch (err) {
    setIsLoading(false);
    notify(err.response.data.status, err.response.data.message);
  }
};

export const updatePost = (post, setIsloading) => async (dispatch) => {};
export const deletePost = (postId, handleDropDown) => async (dispatch) => {
  try {
    const url = `${apiEndPoints.DELETE_POST}/${postId}`;
    const res = await sendApiRequest.delete(url);
    notify(res.data.status, 'Post deleted successfully');
    handleDropDown();
    dispatch({ type: postConstants.DELETE_POST });
  } catch (err) {
    notify(err.response.data.status, err.response.data.message);
  }
};

export const getOnePost = (postId, setExpandPost) => async (dispatch) => {
  try {
    const url = `${apiEndPoints.LIKE_POST}/${postId}`;
    const res = await sendApiRequest.get(url);
    // notify(res.data.status, res.data.message);
    // console.log(res.data);
    setExpandPost(true);
    dispatch({ type: postConstants.GET_ONE_POST, payload: res.data });
  } catch (err) {
    setExpandPost(false);
    notify(err.response.data.status, err.response.data.message);
  }
};

export const like = (postId) => async (dispatch) => {
  try {
    const url = `${apiEndPoints.LIKE_POST}/${postId}/like`;
    const res = await sendApiRequest.patch(url);
    notify(res.data.status, res.data.message);
    dispatch({ type: postConstants.LIKE_POST });
  } catch (err) {
    notify(err.response.data.status, err.response.data.message);
  }
};

export const disLike = (postId) => async (dispatch) => {
  try {
    const url = `${apiEndPoints.DISLIKE_POST}/${postId}/dislike`;
    const res = await sendApiRequest.patch(url);
    notify(res.data.status, res.data.message);
    dispatch({ type: postConstants.DISLIKE_POST });
  } catch (err) {
    notify(err.response.data.status, err.response.data.message);
  }
};

export const createComment = (postId, comment) => async (dispatch) => {
  try {
    const url = `${apiEndPoints.COMMENT}/${postId}/comment`;
    const res = await sendApiRequest.post(url, comment);
    notify(res.data.status, res.data.message);
    dispatch({ type: postConstants.LIKE_POST });
  } catch (err) {
    notify(err.response.data.status, err.response.data.message);
  }
};
