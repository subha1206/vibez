const mongoose = require('mongoose');

const recentActivitySchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    posts: [
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

recentActivitySchema.pre(/^find/, function (next) {
  this.populate({
    path: 'posts',
    select: 'title -likes author',
  });
  next();
});

const RecentActivity = mongoose.model('RecentActivity', recentActivitySchema);

module.exports = RecentActivity;
