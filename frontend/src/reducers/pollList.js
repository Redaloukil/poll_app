import { 
    POLL_PAGE_LOADED , 
    POLL_EDITOR_PAGE_UNLOADED ,
    POLL_SUBMITTED , 
    POLL_DELETED } from './../constants/actionTypes';


export default (state = {}, action) => {
  switch (action.type) {
    case POLL_PAGE_LOADED:
      return {
        ...state,
        article: action.payload[0].article,
        comments: action.payload[1].comments
      };
    case POLL_PAGE_UNLOADED:
      return {};
    
    default:
      return state;
  }
};
