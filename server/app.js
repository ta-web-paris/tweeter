var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tweeter');

const passport = require('passport');
const User = require('./models/user');
const config = require('./config');
const { Strategy, ExtractJwt } = require('passport-jwt');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
// Create the strategy for JWT
const strategy = new Strategy(
  {
    // this is a config we pass to the strategy
    // it needs to secret to decrypt the payload of the
    // token.
    secretOrKey: config.jwtSecret,
    // This options tells the strategy to extract the token
    // from the header of the request
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  (payload, done) => {
    // payload is the object we encrypted at the route /api/token
    // We get the user id, make sure the user exist by looking it up
    User.findById(payload.id).then(user => {
      if (user) {
        // make the user accessible in req.user
        done(null, user);
      } else {
        done(new Error('User not found'));
      }
    });
  }
);
// tell pasport to use it
passport.use(strategy);

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/auth'));

app.get(
  '/api/secret',
  // this is protecting the route and giving us access to
  // req.user
  passport.authenticate('jwt', config.jwtSession),
  (req, res) => {
    // send the user his own information
    res.json(req.user);
  }
);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  const error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
    error: error.message,
  });
});

module.exports = app;
