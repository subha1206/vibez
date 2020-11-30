const User = require('../models/User');
const Feed = require('../models/Feed');
const RecentActivity = require('../models/RecentActivity');
const AppError = require('../utils/AppError');
const catchAsyncError = require('../utils/catchAsyncError');

exports.getMyCred = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.getMe = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id).populate({
    path: 'posts',
  });

  if (!user) return new AppError('No user found', 404);

  res.status(200).json({
    status: 'success',
    data: user,
  });
});

exports.getAllUser = catchAsyncError(async (req, res, next) => {
  let users = [];
  if (req.query.name) {
    users = await User.find({
      name: { $regex: req.query.name, $options: 'i' },
    });

    if (!users) return new AppError('Opps!', 404);
  }

  res.status(200).json({
    status: 'success',
    data: users,
  });
});

exports.getFeed = catchAsyncError(async (req, res, next) => {
  const feed = await Feed.findOne({ author: req.params.id });

  if (!feed) return new AppError('Opps!', 404);

  res.status(200).json({
    status: 'success',
    data: feed,
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

exports.getRecentAct = catchAsyncError(async (req, res, next) => {
  const recentAct = await RecentActivity.findOne({
    author: req.params.id,
  });
  res.status(200).json({
    status: 'success',
    data: recentAct,
  });
});
exports.follow = catchAsyncError(async (req, res, next) => {
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
    data: user,
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
    data: user,
  });
});
