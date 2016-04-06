var express = require('express');
var router = express.Router();
module.exports = function (passport) {

    router.post('/login', passport.authenticate('login', {
        successRedirect: '/Profile',
        failureRedirect: '/login',
        failureFlash: true
    }));
    router.post('/register', passport.authenticate('signup', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));

    router.route('/status')
        .get(function (req, res) {
            if (!req.user) {
                res.send(false);
            }
            res.json({
                hej: "hej"
            });
        });

    router.route('/Profile')
        .all(function (req, res, next) {
            if (!req.user) {
                res.redirect('/');
            }
            next();
        })
        .get(function (req, res) {
            res.redirect('/#Profile');
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