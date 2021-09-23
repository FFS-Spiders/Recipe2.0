import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer.js';

const reducers = combineReducers({
  recipes: recipeReducer,
})

export default reducers;