import { 
    POLL_EDITOR_PAGE_LOADED ,
    POLL_EDITOR_PAGE_UNLOADED ,
    UPDATE_FIELD_EDITOR ,
} from '../constants/actionTypes';


export default (state = {}, action) => {
  switch (action.type) {
    case POLL_EDITOR_PAGE_LOADED:
      return {
        ...state,
        title : action.payload ? action.payload.title : '', 
        description : action.payload ? action.payload.description : '',
      };
    case POLL_EDITOR_PAGE_UNLOADED:
      return {
        ...state
      };
    case UPDATE_FIELD_EDITOR:
      return {
        ...state ,
        [action.key] : action.value       
      }
    default:
      return state;
  }
};
