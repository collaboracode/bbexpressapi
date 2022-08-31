const express = require('express');
const router = express.Router();

const mongoose = require('mongoose')
require('dotenv/config');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


mongoose.connect(process.env.DB_CONNECTION,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})


module.exports = router;
