require('dotenv').config();
require('./config/database');
const logger = require('morgan');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

const http = require('http').Server(app);
const cors = require('cors');
// console.log(process.env.NODE_ENV, process.env.NODE_ENV === 'production' ? process.env.CLIENT_URL : 'http://localhost:3000');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/posts', require('./routes/api/posts'));

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});