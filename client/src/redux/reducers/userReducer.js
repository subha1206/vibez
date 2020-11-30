import produce from 'immer';
import userConstant from '../constants/userConstant';

const initialState = {
  user: null,
  recentActivity: null,
  feed: null,
};

const reducer = produce((state = initialState, action) => {
  switch (action.type) {
    case userConstant.GET_ME:
      return {
        ...state,
        user: action.payload,
      };
    case userConstant.GET_ALL_USER:
      return {
        ...state,
      };
    case userConstant.GET_RECENT_ACTIVITY:
      return {
        ...state,
        recentActivity: action.payload,
      };
    case userConstant.GET_FEED:
      return {
        ...state,
        feed: action.payload,
      };
    default:
      return state;
  }
});

export default reducer;
