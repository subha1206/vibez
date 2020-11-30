const router = require('express').Router({ mergeParams: true });
const authController = require('../controllers/authController');
const commentController = require('../controllers/commentController');

router.use(authController.protectedRoute, commentController.setPostAndUserID);

router
  .route('/')
  .post(commentController.createComment)
  .delete(commentController.deleteComment);

module.exports = router;
