const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');

const app = express();

//! Connect DB
mongoose
  .connect('mongodb://127.0.0.1:27017/smartedu-db')
  .then(() => console.log('Connected!'));

//! Template Engine
app.set('view engine', 'ejs');

//! Middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//! Routes
app.use('/', pageRoute);
app.use('/courses', courseRoute);

app.get('/about');

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
