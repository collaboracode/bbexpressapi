const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
require('dotenv/config');



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// not sure if we will want this in this file, but it is here for now
// Connect to DB 
// requires .env with valid link
mongoose.connect(process.env.DB_CONNECTION);

module.exports = router;
