const express = require('express')
const router = express.Router()
const Guest = require('../models/Guest')
const mongoose = require('mongoose');
const { update } = require('../models/Guest');
require('dotenv/config');


// todo add validations for all but get requests to make sure that the user is an admin,

mongoose.connection.close()
// ? should we make a serializer for this? 
//GETS ALL GUESTS
router.get('/', async (req, res) => {
  try {
    mongoose.connect(process.env.DB_CONNECTION)
      .then(() => {
        Guest.find()
          .then((guests) => {
            res.json(guests)
          })
      })
      .then(() => {
        mongoose.connection.close()
      })
  } catch (err) {
    res.json({ message: err })
  }
})

//GET ONE GUEST
router.get('/:guestId', async (req, res) => {
  try {
    mongoose.connect(process.env.DB_CONNECTION)
      .then(() => {
        Guest.findById(req.params.guestId)
          .then((guest) => {
            res.json(guest)
          })
      })
      .then(() => {
        mongoose.connection.close()
      })
  } catch (err) {
    res.json({ message: err })
  }
})

//SUBMITS A GUEST
router.post('/', (req, res) => {
  mongoose.connect(process.env.DB_CONNECTION)
    .then(() => {
      const post = new Guest({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        bio: req.body.bio,
        birthday: req.body.birthday,
        image_url: req.body.image_url,
        active: req.body.active,
      })
      post.save()
        .then(data => {
          res.json(data)
        })
    })
    .then(() => {
      mongoose.connection.close()
    })
    .catch(err => {
      res.json({ message: err })
    })
})

//UPDATES ONE GUEST
router.patch('/:guestId', async (req, res) => {
  try {
    mongoose.connect(process.env.DB_CONNECTION)
      .then(() => {
        Guest.updateOne({ _id: req.params.guestId }, { $set: { ...req.body } })
          .then((updateGuest) => {
            res.json(updateGuest)
          })
      })
      .then(() => {
        mongoose.connection.close()
      })
  } catch (err) {
    res.json({ message: err })
  }
})

//DELETES ONE GUEST
router.delete('/:guestId', async (req, res) => {
  try {
    mongoose.connect(process.env.DB_CONNECTION)
      .then(() => {
        Guest.remove({ _id: req.params.guestId })
          .then((removeGuest) => {
            res.json(removeGuest)
          })
      })
      .then(() => {
        mongoose.connection.close()
      })
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router