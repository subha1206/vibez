const router = require('express').Router();
const rateLimit = require('../utils/rateLimiter');
const authController = require('../controllers/authController');
const userController = require('../controllers/usercontroller');
const postRouter = require('./postRoutes');

router.post('/signup', rateLimit.authLimiter, authController.signUp);
router.post('/login', rateLimit.loginLimiter, authController.login);

router.post('/forgotPassword', authController.forgotPassowrd);
router.patch('/resetPassword/:token', authController.resetPassword);

router.use(authController.protectedRoute);
router.patch(
  '/updatePassword',
  authController.protectedRoute,
  authController.updatePassword
);

router.get('/me', userController.getMe, userController.getUser);
router.use('/me/posts', postRouter);

module.exports = router;
