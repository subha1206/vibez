const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
process.on('uncaughtException', (err) => {
  console.log(`${err.name}: ${err.message}`);
  process.exit(1);
});

const app = require('./app');

mongoose
  .connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`DB connection successful`);
  })
  .catch((err) => console.error(err));

const server = app.listen(5000, () => console.log(`Server is running on 5000`));

process.on('unhandledRejection', (err) => {
  console.log(`${err.name}: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
