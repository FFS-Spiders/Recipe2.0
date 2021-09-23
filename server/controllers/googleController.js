const { google } = require('googleapis');
const User = require('../models/userModel.js');
require('dotenv').config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
// const { OAuth2Client } = require('google-auth-library')
googleController = {};

//from googleapi docs
const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
//file dependancies
//docs for google api library:
//https://github.com/googleapis/google-api-nodejs-client#oauth2-client

googleController.verifyUser = async (req,res,next) => {
  const {token} = req.body;
  const ticket = await oauth2Client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID
  });
  const { name, email, picture} = ticket.getPayload();
  const user = await User.findOneAndUpdate({'email' : email},{
    $set:{name: name},
    $set:{picture: picture},
    $set:{email: email}
  },{upsert:true, new:true},
  (err, user) => {
    if(err) console.log(err);
    res.locals.user = user
    return next();
  })
}


// server.post("/api/v1/auth/google", async (req, res) => {
//   const { token }  = req.body
//   const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: process.env.CLIENT_ID
//   });
//   const { name, email, picture } = ticket.getPayload();    
//   const user = await db.user.upsert({ 
//       where: { email: email },
//       update: { name, picture },
//       create: { name, email, picture }
//   })
//   res.status(201)
//   res.json(user)
// })

module.exports = googleController;