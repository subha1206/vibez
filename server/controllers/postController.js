const Post = require('../models/Post');
const User = require('../models/User');
const Feed = require('../models/Feed');

const RecentActivity = require('../models/RecentActivity');

const AppError = require('../utils/AppError');
const catchAsyncError = require('../utils/catchAsyncError');

exports.createPost = catchAsyncError(async (req, res, next) => {
  req.body.author = req.user.id;
  const newPost = await Post.create(req.body);

  const folow = await User.findById(req.user.id).select('followers');
  const folowList = folow.followers;
  folowList.map(async (person) => {
    await Feed.findOneAndUpdate(
      { author: person },
      { $push: { feed: newPost._id } },
      {
        new: true,
        upsert: true, // Make this update into an upsert
      }
    );
  });

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
  const post = await Post.findById({ _id: req.params.postId }).populate(
    'comments'
  );
  res.status(201).json({
    status: 'success',
    data: post,
  });
});

exports.updatePost = catchAsyncError(async (req, res, next) => {
  const updatedPost = await Post.findByIdAndUpdate(
    { _id: req.params.postId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: 'success',
    message: 'Post updated successfully',
    data: updatedPost,
  });
});

exports.deletePost = catchAsyncError(async (req, res, next) => {
  const post = await Post.findByIdAndDelete(req.params.postId);

  if (!post) return next(new AppError('No post found!', 404));
  res.status(204).json({
    status: 'success',
    message: 'Post deleted successfully',
    data: null,
  });
});

exports.createLike = catchAsyncError(async (req, res, next) => {
  const postId = req.params.postId;
  await Post.findByIdAndUpdate(
    { _id: postId },
    { $addToSet: { likes: req.user.id } },
    { new: true }
  );

  await RecentActivity.findOneAndUpdate(
    { author: req.user.id },
    { $addToSet: { posts: postId } },
    { new: true, useFindAndModify: false }
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
    { $pull: { likes: req.user.id } }
  );
  res.status(200).json({
    status: 'success',
  });
});
