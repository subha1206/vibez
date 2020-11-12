const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/AppError');
const errorHandeler = require('./controllers/errorController');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(
  express.json({
    limit: '10kb',
  })
);
app.use(cors());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

app.use(errorHandeler);

module.exports = app;
