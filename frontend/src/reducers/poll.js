import { 
    POLL_PAGE_LOADED , 
    POLL_PAGE_UNLOADED ,
} from '../constants/actionTypes';


export default (state = {}, action) => {
  switch (action.type) {
    case POLL_PAGE_LOADED:
      return {
        ...state,
        body: action.error ? null : action.payload,
        error : action.error ? null : action.error,
      };
    case POLL_PAGE_UNLOADED:
      return {

      };
    default:
      return state;
  }
};
