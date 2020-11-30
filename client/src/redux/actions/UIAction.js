import UIConstant from '../constants/UIConstants';

export const showMe = () => (dispatch) => {
  dispatch({ type: UIConstant.SHOW_ME });
};

export const showAddFollow = () => (dispatch) => {
  dispatch({ type: UIConstant.SHOW_ADD_FOLLOW });
};

export const showAddPost = () => (dispatch) => {
  dispatch({ type: UIConstant.SHOW_ADD_POST });
};
