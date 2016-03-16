var express = require('express');
var router = express.Router();
module.exports = function (passport) {

    router.get('/login', function (req, res, next) {
        res.send('respond with a resource');
    });
    router.post('/login', passport.authenticate('login', {
        successRedirect: '../',
        failureRedirect: '/login'
    }));
    router.post('/register', passport.authenticate('signup', {
        successRedirect: './',
        failureRedirect: '/login'
    }));


    return router;
}