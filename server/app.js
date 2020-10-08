const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.listen(5000, () => console.log(`Server is running on 5000`));
