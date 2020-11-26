import postConstants from '../constants/postConstants';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case postConstants.CREATE_POST:
      return state;
    case postConstants.UPDATE_POST:
      return state;
    case postConstants.DELETE_POST:
      return state;
    case postConstants.LIKE_POST:
      return state;
    case postConstants.DISLIKE_POST:
      return state;
    case postConstants.COMMENT:
      return state;
    case postConstants.GET_ONE_POST:
      return {
        ...state,
        currentPost: action.payload,
      };
    default:
      return state;
  }
}
