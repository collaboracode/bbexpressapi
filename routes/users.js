var express = require('express');
var router = express.Router();

const mongoose = require('mongoose')
const User = require('../models/User')

//GETS ALL USERS
router.get('/', async (req, res) => {
  try {
    User.find()
      .then((users) => {
        res.json(users)
      })
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router;