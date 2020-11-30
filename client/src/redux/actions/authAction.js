import { authConstant } from '../constants/authConstant';
import sendApiRequest from '../../helper/sendApiRequest';
import notify from '../../helper/notify';

export const login = (user, history, setIsLoading) => async (dispatch) => {
  try {
    const res = await sendApiRequest.post('/users/login', user);
    notify(res.data.status, res.data.message);
    if (res.data.status === 'success') {
      setIsLoading(false);
      localStorage.setItem('jwt', res.data.token);
      history.push('/home');
      dispatch({ type: authConstant.LOGIN_SUCCESS, payload: res.data });
    }
  } catch (err) {
    setIsLoading(false);
    notify(err.response.data.status, err.response.data.message);
    dispatch({ type: authConstant.LOGIN_FAIL });
  }
};

export const register = (user, history, setIsLoading) => async (dispatch) => {
  try {
    const res = await sendApiRequest.post('/users/signup', user);
    if (res.data.status === 'success') {
      setIsLoading(false);
      notify(res.data.status, 'Sign up successfull');
      localStorage.setItem('jwt', res.data.token);
      history.push('/welcome');
      dispatch({ type: authConstant.REGISTER_SUCCESS, payload: res.data });
    }
  } catch (err) {
    setIsLoading(false);
    notify(err.response.data.status, err.response.data.message);
    dispatch({ type: authConstant.REGISTER_FAIL });
  }
};

export const logout = (data, history) => (dispatch) => {
  // try {
  //   const res = await sendApiRequest.post('/users/signup', user);
  //   if (res.data.status === 'success') {
  //     setIsLoading(false);
  //     notify(res.data.status, 'Sign up successfull');
  //     localStorage.setItem('jwt', res.data.token);
  //     history.push('/welcome');
  //     dispatch({ type: authConstant.REGISTER_SUCCESS, payload: res.data });
  //   }
  // } catch (err) {
  //   setIsLoading(false);
  //   notify(err.response.data.status, err.response.data.message);
  //   dispatch({ type: authConstant.REGISTER_FAIL });
  // }
  history.push('/');
  dispatch({ type: authConstant.LOGOUT });
};

export const forgotPassword = (user, history, setIsLoading) => async (
  dispatch
) => {
  try {
    const res = await sendApiRequest.post('/users/forgotPassword', user);
    notify(
      res.data.status,
      'Password reset token send to your Email, please check your email to reset your password'
    );
    setIsLoading(false);
    history.push('/');
    dispatch({ type: authConstant.FORGOT_PASSWORD_SUCCESS });
  } catch (err) {
    setIsLoading(false);
    notify(err.response.data.status, err.response.data.message);
    dispatch({ type: authConstant.FORGOT_PASSWORD_FAIL });
  }
};

export const resetPassword = (user, history, setIsLoading) => async (
  dispatch
) => {
  try {
    const res = await sendApiRequest.post('/users/signup', user);
    if (res.data.status === 'success') {
      setIsLoading(false);
      notify(res.data.status, 'Sign up successfull');
      localStorage.setItem('jwt', res.data.token);
      history.push('/welcome');
      dispatch({ type: authConstant.REGISTER_SUCCESS, payload: res.data });
    }
  } catch (err) {
    setIsLoading(false);
    notify(err.response.data.status, err.response.data.message);
    dispatch({ type: authConstant.REGISTER_FAIL });
  }
};
