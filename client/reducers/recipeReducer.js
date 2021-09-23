import * as types from '../actions/actionTypes.js';

const initialState = {
  loggedIn: false,
  username: null,
  password: null,
  pantry: [],
}

const recipeReducer = (state = initialState, action) => {
  let loggedIn;

  switch(action.type) {
    case types.LOG_IN:{
      // console.log(action)
      const obj = {
        ...state,
        loggedIn: action.payload
      }
      // console.log(obj);
      return obj;
    };
    case types.CREATE_USER: {
      
    }
    default: {
      return state
    }

  }


}




export default recipeReducer;
