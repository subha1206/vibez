import userConstant from '../constants/userConstant';

const initialState = {
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case userConstant.GET_ME:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
