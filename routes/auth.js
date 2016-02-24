var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('auth routes');
});

var passport = require('passport');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('index', {
            user: req.user
        });
    });

    app.get('/register', function (req, res) {
        res.render('register', {});
    });

    app.post('/register', function (req, res) {
        res.send('du trykkede på register.. nice');
    });

    app.get('/login', function (req, res) {
        res.render('login', {
            user: req.user
        });
    });

    app.post('/login', passport.authenticate('local'), function (req, res) {
        res.redirect('/');
    });

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/ping', function (req, res) {
        res.send("pong!", 200);
    });

};

module.exports = router;