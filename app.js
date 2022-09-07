const cors = require('cors');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');



const session = require('express-session');  // session middleware
const connectEnsureLogin = require('connect-ensure-login'); //authorization
const passport = require('passport');  // authentication
const bodyParser = require('body-parser'); // parser middleware
const mongoose = require('mongoose')
const User = require('./models/User')
require('dotenv/config');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const guestsRoute = require('./routes/guests');

var app = express();

const corsOptions = {
  origin: process.env.ORIGIN,
  credentials: true,
}
app.use(cors(corsOptions));
// app.options(process.env.ORIGIN, cors(corsOptions))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// user sign in
app.use(session({
  secret: 'r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60 * 60 * 1000, // 1 hour
    sameSite: "lax"
  }
}));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


passport.use(User.createStrategy());


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// ! separate auth

app.get('/not_logged_in', function (req, res, next) {
  res.send("not logged in")
})
app.get('/logged_in', connectEnsureLogin.ensureLoggedIn('/not_logged_in'),
  (req, res) => {
    res.status(202).send("logged in")
  }
)
app.post('/login', passport.authenticate('local'), (req, res) => {
  res.status(200).send()
});

app.post('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

app.post('/signup', function (req, res) {
  if (req.body.username && req.body.email && req.body.password) {
    User.register({ username: req.body.username, email: req.body.email/*, first_name: req.body.first_name, last_name: req.body.last_name*/, active: false }, req.body.password, function (err, user) {
      if (err) {
        console.error(err)
        res.status(500).send(err)
      }
      res.status(201).send(user)
    })
  } else {
    res.status(422).send({ recieved: req.body, expected: { username: "string", email: "string", password: "string" } })
  }
})
// ! end of auth

// routes
app.use('/', indexRouter);

app.use('/users', connectEnsureLogin.ensureLoggedIn("/"), usersRouter);
app.use('/guests', guestsRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
