var express = require('express');
var router = express.Router();
module.exports = function (passport) {

    //    router.route('/register')
    //        .get(function (req, res, next) {
    //            res.send('here you register');
    //        })
    //        .post(function (req, res, next) {
    //            var username = req.body['username'];
    //            res.send('Hello ' + username + '!');
    //            console.log(req.body);
    //        });

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