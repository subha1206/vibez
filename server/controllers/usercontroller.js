const User = require('../models/User');
const AppError = require('../utils/AppError');
const catchAsyncError = require('../utils/catchAsyncError');

exports.getMyCred = (req, res, next) => {
  console.log(req.user.id);
  req.params.id = req.user.id;
  next();
};

exports.getMe = catchAsyncError(async (req, res, next) => {
  console.log(req.params.id);
  const user = await User.findById(req.params.id).populate({
    path: 'posts',
  });

  if (!user) return new AppError('No user found', 404);

  res.status(200).json({
    status: 'success',
    data: user,
  });
});

exports.getUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.userId).populate({
    path: 'posts',
  });

  if (!user) return new AppError('No user found', 404);

  res.status(200).json({
    status: 'success',
    data: user,
  });
});

exports.follow = catchAsyncError(async (req, res, next) => {
  console.log('hello');
  const user = await User.findByIdAndUpdate(
    { _id: req.params.userId },
    { $addToSet: { followers: req.user.id } },
    { new: true }
  );

  const me = await User.findByIdAndUpdate(
    { _id: req.user.id },
    { $addToSet: { following: req.params.userId } },
    { new: true }
  );

  if (!user) return new AppError('No user found', 404);

  res.status(200).json({
    status: 'success',
    data: me,
  });
});

exports.unFollow = catchAsyncError(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    { _id: req.params.userId },
    { $pull: { followers: req.user.id } },
    { new: true }
  );

  const me = await User.findByIdAndUpdate(
    { _id: req.user.id },
    { $pull: { following: req.params.userId } },
    { new: true }
  );
  if (!user) return new AppError('No user found', 404);

  res.status(200).json({
    status: 'success',
    data: me,
  });
});
