import {
  POLLS_PAGE_LOADED,
  POLLS_PAGE_UNLOADED,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    
    
    case POLLS_PAGE_UNLOADED :
      return {};
    case POLLS_PAGE_LOADED :
      return {};
    default:
      return state;
  }
};
