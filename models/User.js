const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');

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

UserSchema.plugin(passportLocalMongoose, {
    usernameUnique: true,
    usernameQueryFields: ['email', 'username']
});

module.exports = mongoose.model('users', UserSchema);