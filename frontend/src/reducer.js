import article from './reducers/article';
import articleList from './reducers/articleList';
import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import editor from './reducers/editor';
import home from './reducers/home';

import settings from './reducers/settings';
import pollsList from './reducers/pollsList';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  article,
  articleList,
  pollsList,
  auth,
  common,
  editor,
  home,
 
  settings,
  router: routerReducer
});
