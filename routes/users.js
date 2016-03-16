var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var bCrypt = require('bcrypt-nodejs');

router.get('/', function (req, res, next) {
    User.find(function (err, users) {
        console.log('debug2');
        if (err) {
            return res.send(500, err);
        }
        return res.status(200).send(users);
    });
});

router.get('/:id', function (req, res, next) {
    User.findOne({
        _id: req.params.id
    }, function (err, data) {
        res.json(data);
    });
});

router.delete('/:id', function (req, res, next) {
    User.findByIdAndRemove(req.params.id, function (err) {
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
});


// Generates hash using bCrypt
var createHash = function (password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

module.exports = router;