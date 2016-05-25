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
    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    router.get('/currentUser', function (req, res, next) {
        if (req.user == undefined) {
            res.status(200);
        }
        User.findOne({
            _id: req.user.id
        }, function (err, data) {
            if (err) {
                res.json({
                    err: err
                });
            } else {
                res.status(200).json(data);
            }
        });

    });
    router.post('/currentUser', function (req, res, next) {
        if (req.user) {
            var query = {
                _id: req.user._id
            };
            User.findOneAndUpdate(query, req.body, function (err, data) {
                if (err) {
                    res.json({
                        err: err
                    });
                } else {
                    res.json({
                        err: false
                    });
                }
            });
        }

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