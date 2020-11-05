const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    lowercase: true,
    unique: [true, 'Email already in use, please use a different email ID'],
    validate: [isEmail, 'Please provide a valid email ID'],
  },
  userImage: {
    type: String,
  },
  tags: [String],
  password: {
    type: String,
    required: [true, 'You must provide a password'],
    minlength: [8, 'Your password has to be 8 char long'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      message: 'Password did not match',
      validator: function (el) {
        return el === this.password;
      },
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.checkPassword = async function (clientPass, userPass) {
  return await bcrypt.compare(clientPass, userPass);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
