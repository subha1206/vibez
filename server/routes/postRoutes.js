const router = require('express').Router({ mergeParams: true });
const authController = require('../controllers/authController');
const postController = require('../controllers/postController');
const commentRouter = require('./commentRoutes');

router.use(authController.protectedRoute);
router.route('/').post(postController.createPost);

router
  .route('/:postId')
  .get(postController.getPost)
  .patch(postController.checkPostBelongsToUser, postController.updatePost)
  .delete(postController.checkPostBelongsToUser, postController.deletePost);

router.route('/:postId/like').patch(postController.createLike);
router.route('/:postId/disLike').patch(postController.removeLike);

router.use('/:postId/comment', commentRouter);

module.exports = router;
