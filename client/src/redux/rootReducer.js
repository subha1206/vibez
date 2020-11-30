import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import postReducers from './reducers/postReducers';
import userReducers from './reducers/userReducer';
import UIReducer from './reducers/UIReducers';
import storage from 'redux-persist/lib/storage';

const appReducer = combineReducers({
  auth: authReducer,
  post: postReducers,
  user: userReducers,
  UI: UIReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    storage.removeItem('persist:auth');
    state = undefined;
    console.log(state);
  }

  return appReducer(state, action);
};
export default rootReducer;
