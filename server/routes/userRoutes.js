const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signUp);
router.post('/login', authController.login);

router.get('/log', authController.protectedRoute, (req, res) => {
  res.status(200).json({
    name: 'hello from express',
  });
});

module.exports = router;
