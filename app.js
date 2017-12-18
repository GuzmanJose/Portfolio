var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var validator = require('express-validator');
var data = require('./public/data/dataPortfolio.json');	
var index = require('./routes/index');
var projects = require('./routes/projects');
var resume = require('./routes/resume');
var contact = require('./routes/contact');
var contactPost = require('./routes/contactPost');
var duck = require('./routes/duck');
var app = express();
var device = require('express-device');

app.locals.portData = data;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('view options', {layout: false});
app.set('views', __dirname + '/views');
app.set('portfolioData', data);

app.use(logger('dev'));
app.use(device.capture());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/projects', projects);
app.use('/resume', resume);
app.use('/contact', contact);
app.use('/contact', contactPost);
app.use('/duck', duck);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

	// Listening on port 3000 DEBUG=portfolio:* npm start

module.exports = app;
