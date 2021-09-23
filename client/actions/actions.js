import * as types from './actionTypes';
import axios from 'axios';
import { post } from 'superagent';

const loggingInActionCreator = () => ({
  type: types.LOG_IN,
  payload: true
});
const createUserActionCreator = () => ({
  type: types.CREATE_USER,
  payload: true
});

export const addPantryActionCreator = (item) => ({
  type: types.ADD_PANTRY,
  payload: item,
})

export const addCartActionCreator = (item) => ({
  type: types.ADD_CART,
  payload: item,
})

export const logIn = (username, password) => (dispatch, getState) => {
  console.log('state in actions.js', getState())
  // console.log(dispatch);
  // console.log(username, password)
  axios
    .post('http://localhost:3000/users/login',
    {
      username: username,
      password: password,
    },
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then((response) => {
      console.log('response')
      // if (response.data === 'Send to their page') {
        console.log(response)
        //this is the expected response from backend upon successful login
        console.log('state in actions.js', getState())
        return dispatch(loggingInActionCreator());
    // }
    })
    .catch((error) => console.log('Error from login. Hates u.'));
};

export const createUser = (username, password) => (dispatch, getState) => {
  axios
    .post('http://localhost:3000/users/create',
    {
      username: username,
      password: password
    },
    {
      method: post,
      headers: {
        'Content-type': 'application/json'
      },
    })
    .then(response => {
      console.log(response)
    })
}

export const getMeal = () => (dispatch, getState) => {
  axios({
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    data: {
      cuisine: cuisineSelection,
      ingredients: ingredientSelection,
      numberOfResults: countSelection,
    },
    url: '/recipes/find',
  }).then((data) => {
    console.log(data);
    const newObjArr = []; //this will hold all of the objects in the correct format so that the front-end can add them to the state to be rendered
    //this is what the data from the backend looks like
    //{titleArr, ingredientResults, directionResults, imgArr}
    //directionResults -> {id, summary, title}
    //ingredientResults -> {ingredients: [{name,image,amount:{metric:{value, unit}, us:{value, unit},}}]}
    //titleArr, imgArr -> [string1, string2, string3...],
    //an example response down below at bottom of page
    data.data.titleArr.forEach((el, idx) => {
      //here we create a new object for each title
      let directions;
      if (data.data.newDirectionResults[idx]) {
        //checking if directions for that title exist, cause accessing undefined.summary throws typeError
        directions = data.data.newDirectionResults[idx].summary;
      } else directions = '';
      const newObj = {
        name: el,
        ingredients: data.data.newIngredientResults[idx].map((el) => el.name),
        img: data.data.imageArr[idx],
        directions,
      };
      newObjArr.push(newObj);
    });
    props.addMeal(newObjArr);
  });
}