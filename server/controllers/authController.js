const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/User');
const AppError = require('../utils/AppError');
const catchAsyncError = require('../utils/catchAsyncError');
const sendEmail = require('../utils/email');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createAndSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  const cookieOpt = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') cookieOpt.secure = true;

  res.cookie('jwt', token, cookieOpt);

  user.password = undefined;
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

exports.signUp = catchAsyncError(async (req, res) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  createAndSendToken(newUser, 201, req, res);
  await sendEmail({
    userName: newUser.name,
    type: 'welcome',
    email: newUser.email,
    subject: 'Welcome to Chat And Build',
  });
});

exports.login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new AppError('Please provide email and password', 400));

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.comparePasswordWithDB(password, user.password))) {
    return next(new AppError('Incorrect Email or password', 401));
  }
  createAndSendToken(user, 200, req, res);

  // const token = signToken(user._id);

  // res.status(200).json({
  //   status: 'success',
  //   token,
  // });
});

exports.protectedRoute = catchAsyncError(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(
      new AppError(
        'Aha! looks like you are not logged in, please log in to view the content',
        401
      )
    );
  }

  const decodedJWT = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decodedJWT.id);

  if (!currentUser) {
    return next(new AppError('Oops! look like this user does not exists', 401));
  }

  if (currentUser.checkIfPasswordChanged(decodedJWT.iat)) {
    return next(
      new AppError('User recently changed password! Please log in again.', 401)
    );
  }

  req.user = currentUser;
  next();
});

exports.forgotPassowrd = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return next(new AppError('There is no user with this email', 404));

  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // creating reset URL for email

  const resetURL = `${req.protocol}://${req.get(
    'host'
  )}/api/v1/users/resetPassword/${resetToken}`;

  try {
    await sendEmail({
      userName: user.name,
      type: 'password-reset',
      email: user.email,
      subject: 'Password reset link',
      resetLink: resetURL,
    });
    res.status(200).json({
      status: 'success',
      message: 'Your password reset link has been sent to your email',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save({ validateBeforeSave: false });
    return next(new AppError('There was an error please try again', 500));
  }
});

exports.resetPassword = catchAsyncError(async (req, res, next) => {
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) {
    return new AppError(
      'Oops! Looks like your link is expired. Please try again',
      400
    );
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  await user.save();

  createAndSendToken(user, 200, req, res);
});

exports.updatePassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id).select('+password');

  if (!user.comparePasswordWithDB(req.body.passwordCurrent, user.password)) {
    return next(
      new AppError('Opps! looks like your current password is wrong', 401)
    );
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  createAndSendToken(user, 200, req, res);
});
