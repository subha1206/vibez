const API_END_POINTS = {
  USER_LOGIN: '/users/login',
  USER_REGISTER: '/users/signup',
  USER_FORGOT_PASSWORD: '/users/forgotPassword',
  USER_UPDATE_PASSWORD: '/users/updatePassword',
  USER_RESET_PASSWORD: '/users/resetPassword',

  GET_ME: '/users/me',
  GET_RECENT_ACTIVITY: '/users/me/activity',
  GET_FEED: '/users/me/feed',
  GET_ALL_USER: '/users/me/findFriends',

  FOLLOW: '/users',
  UNFOLLOW: '/users',

  // Post

  CREATE_POST: '/users/me/posts',
  UPDATE_POST: '/users/me/posts',
  DELETE_POST: '/users/me/posts',
  GET_ONE_POST: '/posts',
  LIKE_POST: '/posts',
  DISLIKE_POST: '/posts',
  COMMENT: '/posts',
};

export default API_END_POINTS;
