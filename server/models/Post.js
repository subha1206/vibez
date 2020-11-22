const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provid a title'],
    },
    tags: [String],
    description: {
      type: String,
      required: [true, 'Please provide a description about your post!'],
    },
    photo: String,
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'A post must have a author!'],
    },
    likes: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

postSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'post',
});

postSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'author',
    select: 'name userImage',
  });
  next();
});

postSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'likes',
    select: 'name',
  });

  next();
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
