import userConstant from '../constants/userConstant';

import sendApiRequest from '../../helper/sendApiRequest';
import apiEndPoints from '../../services/apiEndpoints';
import notify from '../../helper/notify';

export const getMe = () => async (dispatch) => {
  try {
    const res = await sendApiRequest(apiEndPoints.GET_ME);
    dispatch({ type: userConstant.GET_ME, payload: res.data.data });
  } catch (err) {
    notify(err.response.data.status, err.response.data.message);
  }
};
