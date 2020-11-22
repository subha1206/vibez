const Comment = require('../models/Comment');
// const AppError = require('../utils/AppError');
const catchAsyncError = require('../utils/catchAsyncError');

exports.setPostAndUserID = (req, res, next) => {
  if (!req.body.post) req.body.post = req.params.postId;
  if (!req.body.user) req.body.user = req.user.id;

  next();
};

exports.createComment = catchAsyncError(async (req, res, next) => {
  console.log(req.body, req.params.postId, req.user.id);
  const newComment = await Comment.create(req.body);
  res.status(201).json({
    status: 'success',
    message: 'Your comment added successfully!',
    data: newComment,
  });
});

exports.deleteComment = catchAsyncError(async (req, res, next) => {
  await Comment.findByIdAndDelete({ _id: req.body.commentId });
  res.status(204).json({
    status: 'success',
    data: null,
  });
});
