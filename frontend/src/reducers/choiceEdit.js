import { 
    CHOICE_EDIT_OPEN ,
    CHOICE_FIELD_EDIT ,
    CHOICE_SUBMITTED ,
    CHOICE_EDIT_CLOSE ,  
} from '../constants/actionTypes';


export default (state = {}, action) => {
  switch (action.type) {
    case CHOICE_EDIT_OPEN:
      return {
        ...state,
        edit : true, 
    }
    case CHOICE_EDIT_CLOSE : 
        return {
            ...state,
            edit:false,
        }    
    case CHOICE_FIELD_EDIT:
      return {
        ...state,
        [action.key]: action.value
        };
    case CHOICE_SUBMITTED:
      return {
        ...state ,
               
      }
    default:
      return state;
  }
};
