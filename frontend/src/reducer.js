import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import home from './reducers/home';
import settings from './reducers/settings';
import pollsList from './reducers/pollsList';
import postsList from './reducers/postsList';
import poll from './reducers/poll';
import pollEdit from './reducers/pollEdit';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  auth,
  common,
  home,
  settings,
  pollsList,
  postsList,
  pollEdit,
  poll,
  router: routerReducer
});
