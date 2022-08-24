const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
require('dotenv/config');
const bodyParser = require('body-parser'); // parser middleware
const session = require('express-session');  // session middleware
const passport = require('passport');  // authentication
const connectEnsureLogin = require('connect-ensure-login'); //authorization
const User = require('../models/User')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// not sure if we will want this in this file, but it is here for now
// Connect to DB 
// requires .env with valid link
mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  
})
.then(() => {
    console.log('Connected to MongoDB...')
  })

module.exports = router;
