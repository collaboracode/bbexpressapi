const UserDetails = require('../models/User');
const mongoose = require('mongoose')
require('dotenv/config');

mongoose.connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
  })
  .then(() => {
      console.log('Connected to MongoDB...')
    })


UserDetails.register({ username: 'candy', active: false }, 'cane');
UserDetails.register({ username: 'starbuck', active: false }, 'redeye');