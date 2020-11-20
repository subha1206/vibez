const Comment = require('../models/Comment');
// const AppError = require('../utils/AppError');
const catchAsyncError = require('../utils/catchAsyncError');

exports.setPostAndUserID = (req, res, next) => {
  if (!req.body.post) req.body.tour = req.params.postId;
  if (!req.body.user) req.body.user = req.user.id;

  next();
};

exports.createComment = catchAsyncError(async (req, res, next) => {
  const newComment = await Comment.create(req.body);

  res.status(201).json({
    status: 'success',
    message: 'Comment created successfully.',
    data: newComment,
  });
});
