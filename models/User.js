const mongoose = require('mongoose')

const session = require('express-session');  // session middleware
const connectEnsureLogin = require('connect-ensure-login'); //authorization
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');  // authentication
const bodyParser = require('body-parser'); // parser middleware

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

module.exports = mongoose.model('users', UserSchema);