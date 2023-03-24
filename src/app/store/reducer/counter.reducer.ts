import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';


// Define the initial state
const initialState = {
  count: 0,
  todos: [],
  user: null,
  isLogin : false
}

// Define the reducer function
function counterReducer(state = initialState, action : Action) {
  switch(action.type) {
    case '[Counter Component] Increment':
      return { ...state, count: state.count + 1 }
    case '[Counter Component] Decrement':
     return { ...state, count: state.count - 1 }
    case '[Counter Component] Reset':
        return { ...state, count: 0 }
    default:
        return state    
  }
}

export default counterReducer



