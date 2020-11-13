const router = require('express').Router();
const rateLimit = require('../utils/rateLimiter');
const authController = require('../controllers/authController');

router.post('/signup', rateLimit.authLimiter, authController.signUp);
router.post('/login', rateLimit.loginLimiter, authController.login);

router.post('/forgotPassword', authController.forgotPassowrd);
router.patch('/resetPassword/:token', authController.resetPassword);
router.patch(
  '/updatePassword',
  authController.protectedRoute,
  authController.updatePassword
);

module.exports = router;
