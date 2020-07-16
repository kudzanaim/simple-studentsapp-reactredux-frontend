import { SEARCHFIRST, SEARCHLAST, GETALL} from "../actions/action";

export function REDUCER(state, action) {
  switch (action.type) {   
      case GETALL:
        return {...state, all:action.payload.data}   
      case SEARCHFIRST:
        return {...state, results:action.payload.data}      
      case SEARCHLAST:
        return {...state, results:action.payload.data}    
      default:
          return state;
  }
}