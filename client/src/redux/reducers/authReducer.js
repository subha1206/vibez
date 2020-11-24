const initialState = {
  token: localStorage.getItem('jwt'),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'USER_LOADING':
      return {
        ...state,
        isLoading: true,
      };

    case 'USER_LOADED':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };

    case 'REGISTER_FAIL':
    case 'LOGIN_FAIL':
    case 'AUTH_FAIL':
    case 'LOGOUT':
    case 'FORGOT_PASSWORD_SUCCESS':
    case 'FORGOT_PASSWORD_FAIL':
      localStorage.clear();
      return {
        token: null,
        isAuthenticated: false,
        user: null,
        isLoading: false,
      };
    default:
      return state;
  }
}
