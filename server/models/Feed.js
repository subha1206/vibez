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

feedSchema.pre('findOne', function (next) {
  this.populate({
    path: 'feed',
  });
  next();
});

const Feed = mongoose.model('Feed', feedSchema);

module.exports = Feed;
