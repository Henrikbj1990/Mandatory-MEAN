var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var passport = require('passport');

router.get('/users/',
    function (req, res, next) {
        res.render('admin/users', {
            title: 'Users'
        });
    });


module.exports = router;