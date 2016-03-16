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

router.get('/users/:id', function (req, res, next) {
    User.findOne({
        _id: req.params.id
    }, function (err, data) {
        res.json(data);
    });
});


module.exports = router;