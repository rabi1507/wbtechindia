const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    unique: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword:{
    type: String,
    required: true,

  },
  contactNumber:{
    type: String,
    required: true,
  },
  profilePicture:{
    type:String,
  },
  bio: {
    type:String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAT:{
    type:Date,
    default:Date.now(),
}
});

const User = mongoose.model('User', userSchema);
module.exports = User;
