var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var session = require('express-session');
var cookieSession = require('cookie-session')
var index = require('./routes/index');
var users = require('./routes/users');
var cors = require('cors')
var mysql = require('mysql');
var app = express();

app.set('trust proxy', 1) // trust first proxy

app.use(cors())

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'server')));

//connect to database everytime app gets called so that the connection won't timeout
app.use(function(request, response, next) {
    response.locals.connection = mysql.createConnection({
      host: 'dbinstanceaws.cr1itmhwscoi.us-east-2.rds.amazonaws.com',
      port: '3306',
      user: 'dbteam',
      password: 'dbpassword',
      database: 'dbteam'
  });
  response.locals.connection.connect();
  next();
});

app.use('/', index);
app.use('/users', users);

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

module.exports = app;

var server = http.createServer(app);
server.listen(3000);
