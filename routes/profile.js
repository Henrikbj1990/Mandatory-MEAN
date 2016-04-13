var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

module.exports = function (passport) {
    router.route('/')
        .all(function (req, res, next) {
            if (!req.user) {
                res.redirect('/');
            }
            next();
        })
        .get(function (req, res) {
            res.render('profile/showProfile', {
                title: 'Profile'
            });
        });
    router.route('/editProfile')
        .all(function (req, res, next) {
            if (!req.user) {
                res.redirect('/');
            }
            next();
        })
        .get(function (req, res) {
            res.render('profile/editProfile', {
                title: 'Profile'
            });
        });
    return router;
}