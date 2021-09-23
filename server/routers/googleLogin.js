// const express = require('express');
// const router = express.Router();
// const googleController = require('../controllers/googleController');

// router.get('/', googleController.login);

// //localhost:3000/login/callback
// //route to authenticate user credentials and sign user in
// router.get('/callback', googleController.getCredentials, (req, res) => {
//     console.log(res.locals.redirectUrl);
//     if (res.locals.redirectUrl) {
//       res.redirect(res.locals.redirectUrl);
//     } else {
//       res
//         .sendStatus(404)
//         .statusMessage('There was an error with the request. Please try again.');
//     }
//   });

//   module.exports = router;

const express = require('express');
const { google } = require('googleapis');
const router = express.Router();
const googleController = require('../controllers/googleController');

// router.get('/', googleController.login, (req,res) => {
//     //send data to db
//     //render the recipe page
// });
router.post('/api/v1/auth/google', googleController.verifyUser, (req,res) => {
  return res.status(201).json(res.locals.user);
})

module.exports = router;