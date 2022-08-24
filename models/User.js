const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');
require('dotenv/config');

// mongoose.connect(process.env.DB_CONNECTION, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

const UserSchema = mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    username: String,
    password: String,
    email: String,
    birthday: Date,
    image_url: String,
    active: Boolean,
})

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Users', UserSchema, 'Users');