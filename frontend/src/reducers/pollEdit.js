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
        title : '', 
        description : '',
      };
    case POLL_EDITOR_PAGE_UNLOADED:
      return {

      };
    case UPDATE_FIELD_EDITOR:
      return {
        ...state,
        [action.payload.field] : action.payload.content       
      }
    default:
      return state;
  }
};