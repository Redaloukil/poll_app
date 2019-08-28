import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  POLL_PAGE_LOADED,
  POLL_PAGE_UNLOADED,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        polls: action.error ? null : action.payload[1].polls,
        error : action.error ? null : action.error,
      };
    case HOME_PAGE_UNLOADED :
    case POLLS_PAGE_UNLOADED :
      return {};
    case POLLS_PAGE_LOADED :
      return {
        ...state,
        polls:[],
      }
    default:
      return state;
  }
};
