const Post = require('../models/Post');
const AppError = require('../utils/AppError');
const catchAsyncError = require('../utils/catchAsyncError');

exports.createPost = catchAsyncError(async (req, res, next) => {
  req.body.author = req.user.id;
  const newPost = await Post.create(req.body);
  res.status(201).json({
    status: 'success',
    message: 'Post created successfully.',
    data: newPost,
  });
});

exports.checkPostBelongsToUser = catchAsyncError(async (req, res, next) => {
  const post = await Post.findById(req.params.postId);

  if (!post) return next(new AppError('Post doesnot exists!', 404));

  if (post.author.id !== req.user.id) {
    return next(new AppError('You dont have the permission to proceed!', 401));
  }
  next();
});

exports.getPost = catchAsyncError(async (req, res, next) => {
  const post = await Post.find(req.params.tourId);
  res.status(201).json({
    status: 'success',
    data: post,
  });
});

exports.updatePost = catchAsyncError(async (req, res, next) => {
  // const updatedPost = await Post.findByIdAndUpdate();

  res.status(200).json({
    status: 'success',
    // data: updatedPost,
  });
});

exports.deletePost = catchAsyncError(async (req, res, next) => {
  await Post.deleteOne();

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.createLike = catchAsyncError(async (req, res, next) => {
  const postId = req.params.postId;
  await Post.findByIdAndUpdate(
    { _id: postId },
    { $addToSet: { likes: req.user.id } }
  );
  res.status(200).json({
    status: 'success',
    message: 'You liked the post',
  });
});

exports.removeLike = catchAsyncError(async (req, res, next) => {
  const postId = req.params.postId;
  await Post.findByIdAndUpdate(
    { _id: postId },
    { $addToSet: { likes: req.user.id } }
  );
  res.status(200).json({
    status: 'success',
    message: 'You liked the post',
  });
});
