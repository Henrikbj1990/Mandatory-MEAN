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

router.get('/newUser/',
    function (req, res, next) {
        res.render('admin/newUser', {
            title: 'New User'
        });
    });

router.delete('/:id', function (req, res) {
    User.remove({
        _id: req.params.id
    }, function (err) {
        if (err)
            res.send(err);
        res.json("deleted :(");
    });
});


module.exports = router;