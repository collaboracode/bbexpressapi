const mongoose = require('mongoose')

const GuestSchema = mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  bio: String,
  birthday: Date,
  image_url: String,
  active: Boolean,
})

module.exports = mongoose.model('Guests', GuestSchema)