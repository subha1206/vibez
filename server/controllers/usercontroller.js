const User = require('../models/User');
const AppError = require('../utils/AppError');
const catchAsyncError = require('../utils/catchAsyncError');

exports.getMe = (req, res, next) => {
  console.log(req.user.id);
  req.params.id = req.user.id;
  next();
};

exports.getUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id).populate({
    path: 'posts',
    populate: { path: 'posts.likes' },
  });

  if (!user) return new AppError('No user found', 404);

  res.status(200).json({
    status: 'success',
    data: user,
  });
});
