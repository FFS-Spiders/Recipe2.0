import * as types from '../actions/actionTypes.js';

const initialState = {
  loggedIn: false,
  username: null,
  password: null,
  pantry: [],
  cart: [],

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

    };
    case types.ADD_PANTRY: {
      const { pantry } = state;
      const pantryCopy = [...pantry]

      pantryCopy.push(action.payload);
      console.log(pantryCopy);
      return {
        ...state,
        pantry: pantryCopy
      }
    };
    case types.ADD_CART: {
      const { cart } = state;
      const cartCopy = [...cart];
      cartCopy.push(action.payload);
      return {
        ...state,
        cart: cartCopy
      }
    };
    default: {
      return state
    }
  }
}




export default recipeReducer;
