const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Comment must belong to a user.'],
    },
    feed: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Post',
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

feedSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'author',
    select: 'id',
  });
  next();
});

feedSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'feed',
    select: 'id',
  });
  next();
});

const Feed = mongoose.model('Feed', postSchema);

module.exports = Feed;
