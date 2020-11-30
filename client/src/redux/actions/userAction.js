import userConstant from '../constants/userConstant';
import sendApiRequest from '../../helper/sendApiRequest';
import apiEndPoints from '../../services/apiEndpoints';
import notify from '../../helper/notify';

export const getMe = () => async (dispatch) => {
  try {
    const res = await sendApiRequest.get(apiEndPoints.GET_ME);
    dispatch({ type: userConstant.GET_ME, payload: res.data.data });
  } catch (err) {
    if (err.response) {
      notify(err.response.data.status, err.response.data.message);
    }
  }
};

export const getAllUser = (query) => async (dispatch) => {
  try {
    const url = `${apiEndPoints.GET_ALL_USER}?name=${query}`;
    const res = await sendApiRequest.get(url);
    dispatch({ type: userConstant.GET_ALL_USER });
    return await res.data.data;
  } catch (err) {
    if (err.response) {
      notify(err.response.data.status, err.response.data.message);
    }
  }
};

export const getRecentActivity = () => async (dispatch) => {
  try {
    const res = await sendApiRequest.get(apiEndPoints.GET_RECENT_ACTIVITY);
    dispatch({
      type: userConstant.GET_RECENT_ACTIVITY,
      payload: res.data?.data?.posts,
    });
  } catch (err) {
    if (err.response) {
      notify(err.response.data.status, err.response.data.message);
    }
  }
};

export const getUserFeed = () => async (dispatch) => {
  try {
    const res = await sendApiRequest.get(apiEndPoints.GET_FEED);
    dispatch({
      type: userConstant.GET_FEED,
      payload: res.data.data.feed,
    });
  } catch (err) {
    if (err.response) {
      notify(err.response.data.status, err.response.data.message);
    }
  }
};

export const follow = (userId) => async (dispatch) => {
  try {
    const url = `${apiEndPoints.FOLLOW}/${userId}/follow`;
    const res = await sendApiRequest.patch(url);
    dispatch({
      type: userConstant.FOLLOW,
    });
    console.log(res.data.data);
    notify(res.data.status, `You started following ${res.data.data.name}`);
  } catch (err) {
    notify(err.response.data.status, err.response.data.message);
  }
};

export const unFollow = (userId) => async (dispatch) => {
  try {
    const url = `${apiEndPoints.UNFOLLOW}/${userId}/unFollow`;
    const res = await sendApiRequest.patch(url);
    notify(res.data.status, `You unfollwed ${res.data.data.name}`);

    dispatch({
      type: userConstant.UNFOLLOW,
    });
  } catch (err) {
    notify(err.response.data.status, err.response.data.message);
  }
};
