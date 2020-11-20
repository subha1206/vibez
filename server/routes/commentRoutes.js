const router = require('express').Router();
const authController = require('../controllers/authController');
const commentController = require('../controllers/commentController');

router.use(authController.protectedRoute);
router
  .route('/')
  .post(commentController.setPostAndUserID, commentController.createComment);

module.exports = router;
