import * as types from './actionTypes';
import axios from 'axios';

const loggingInActionCreator = () => ({
  type: types.LOG_IN,
  payload: true
});

// export const logIn = (username, password) => (dispatch, getState) => {
//   axios({
//     method: 'POST',
//     url: 'http://localhost:3000/users/login',
//     data: {
//       username: username,
//       password: password,
//     },
//   }).then((response) => {
//     if (response.data === 'Send to their page') {
//       //this is the expected response from backend upon successful login
//       return dispatch(loggingInActionCreator());
//     }
//   })
//   .catch((error) => console.log('Error from login. Hates u.'));
// };

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

