var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
// const User = require('../models/User')

const bodyParser = require('body-parser'); // parser middleware
const session = require('express-session');  // session middleware
const passport = require('passport');  // authentication
const connectEnsureLogin = require('connect-ensure-login'); //authorization
const User = require('../models/User')

//GETS ALL USERS
router.get('/', async (req, res) => {
  try {
    mongoose.connect(process.env.DB_CONNECTION_USERS, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
      .then(() => {
        User.find()
          .then((users) => {
            res.json(users)
            mongoose.connection.close()
          })
          .then(() => {
            mongoose.connection.close()
          })
      })
  } catch (err) {
    res.json({ message: err })
  }
})
module.exports = router;
