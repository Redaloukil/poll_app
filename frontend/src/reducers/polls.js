import { 
    POLL_PAGE_LOADED , 
    POLL_PAGE_UNLOADED ,
    POLL_SUBMITTED , 
    POLL_DELETED } from './../constants/actionTypes';


export default (state = {}, action) => {
  switch (action.type) {
    case POLL_PAGE_LOADED:
      return {
        ...state,
        polls: action.payload,
        };
    case POLL_PAGE_UNLOADED:
      return {};
    
    default:
      return state;
  }
};
