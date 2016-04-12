var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function (passport) {

    router.post('/login', passport.authenticate('login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    }));
    router.post('/register', passport.authenticate('signup', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));

    router.get('/currentUser', function (req, res, next) {
        User.findOne({
            _id: req.user.id
        }, function (err, data) {
            res.json(data);
        });
    });

    router.route('/profile')
        .all(function (req, res, next) {
            if (!req.user) {
                res.redirect('/');
            }
            next();
        })
        .get(function (req, res) {
            res.render('profile', {
                title: 'Profile'
            });
        });

    router.route('/admin+*')
        .all(function (req, res, next) {
            if (!req.user) {
                res.redirect('/');
            }
            next();
        })
        .get(function (req, res) {
            res.redirect('/admin/admin.html');
        });

    return router;
}