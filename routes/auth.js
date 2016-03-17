var express = require('express');
var router = express.Router();
module.exports = function (passport) {

    router.post('/login', passport.authenticate('login', {
        successRedirect: '/profile',
        failureRedirect: '/login'
    }));
    router.post('/register', passport.authenticate('signup', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));

router.route('/profile')
        .all(function (req, res, next) {
            if (!req.user) {
                res.redirect('/');
            }
            next();
        })
        .get(function (req, res) {
            res.json(req.user);
        });
    
router.route('/admin/*')
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