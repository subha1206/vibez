import commonConstant from '../constants/UIConstants';

const initialState = {
  addFollow: false,
  addPost: false,
  showMe: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case commonConstant.SHOW_ADD_FOLLOW:
      return {
        ...state,
        addFollow: !state.addFollow,
      };
    case commonConstant.SHOW_ADD_POST:
      return {
        ...state,
        addPost: !state.addPost,
      };
    case commonConstant.SHOW_ME:
      return {
        ...state,
        showMe: !state.showMe,
      };
    default:
      return state;
  }
}
