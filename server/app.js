const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');

const userRouter = require('./routes/userRoutes');
const commentRouter = require('./routes/commentRoutes');
const postRouter = require('./routes/postRoutes');
const AppError = require('./utils/AppError');
const errorHandeler = require('./controllers/errorController');

const app = express();
app.use(helmet());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message:
    'Too many request from your system, please try again after some time!',
});

// app.use('/api', limiter);
app.use(
  express.json({
    limit: '10kb',
  })
);
app.use(mongoSanitize());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/comments', commentRouter);
app.use('/api/v1/posts', postRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

app.use(errorHandeler);

module.exports = app;
