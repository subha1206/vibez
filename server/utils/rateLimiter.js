const rateLimit = require('express-rate-limit');

exports.loginLimiter = rateLimit({
  max: 3,
  windowMs: 5 * 60 * 1000,
  message:
    'You are blocked due to security issues! please try again after 5 min.',
});

exports.authLimiter = rateLimit({
  max: 10,
  windowMs: 15 * 60 * 1000,
  message:
    'Too many request from your system, please try again after some time!',
});
