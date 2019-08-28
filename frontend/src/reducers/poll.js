import { 
    POLL_PAGE_LOADED , 
    POLL_PAGE_UNLOADED ,
    CHOICE_ADDED , 
    CHOICE_DELETED ,
    POLL_SUBMITTED, 
    POLL_DELETED } from '../constants/actionTypes';


export default (state = {}, action) => {
  switch (action.type) {
    case POLL_PAGE_LOADED:
      return {
        ...state,
        poll: action.error ? null : action.payload,
        error : action.error ? null : action.error,
      };
    case POLL_PAGE_UNLOADED:
      return {

      };
    default:
      return state;
  }
};
