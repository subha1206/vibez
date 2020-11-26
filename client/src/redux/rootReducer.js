import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import postReducers from './reducers/postReducers';
import userReducers from './reducers/userReducer';
import storage from 'redux-persist/lib/storage';

const appReducer = combineReducers({
  auth: authReducer,
  post: postReducers,
  user: userReducers,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    // storage.removeItem('persist:root');
    storage.removeItem('persist:user');
    const { auth, post } = state;

    state = { auth, post };
  }

  return appReducer(state, action);
};
export default rootReducer;
