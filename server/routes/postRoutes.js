const router = require('express').Router();
const authController = require('../controllers/authController');
const postController = require('../controllers/postController');

router.use(authController.protectedRoute);
router.route('/').post(postController.createPost);

router
  .route('/:postId')
  .get(postController.getPost)
  .patch(postController.checkPostBelongsToUser, postController.updatePost)
  .delete(postController.checkPostBelongsToUser, postController.deletePost);
router.route('/:postId/like').patch(postController.createLike);
router.route('/:postId/disLike').patch(postController.createLike);

module.exports = router;
