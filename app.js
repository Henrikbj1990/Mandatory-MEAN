var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var flash = require('connect-flash');

require('./models/models');

var routes = require('./routes/index');
var users = require('./routes/users');
var articles = require('./routes/articles');
var tags = require('./routes/tags');
var categories = require('./routes/categories');
var admin = require('./routes/admin');
var auth = require('./routes/auth')(passport);
var profile = require('./routes/profile')(passport);

var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://nicolai:hej123@ds013619.mlab.com:13619/meanstack');

//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/testing');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to mongodb");
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(session({
    secret: 'library'
}));
app.use(flash());

require('./src/config/passport')(app);
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', routes);
app.use('/users', users);
app.use('/articles', articles);
app.use('/tags', tags);
app.use('/categories', categories);
app.use('/profile', profile);
app.use('/', auth);
app.use('/admin', admin);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;