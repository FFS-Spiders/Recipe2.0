const mongoose = require('mongoose');
//add logic to controllers to find/check username/password or user_id in db
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
  },
  user_Id: String,
  name: String,
  updated: { type: Date, default: Date.now },
  picture: String,
  email: String,
  pantry: {
    type: Array
  },
  shoppingList: {
    type: Array
  },
})


module.exports = mongoose.model('User', userSchema);
