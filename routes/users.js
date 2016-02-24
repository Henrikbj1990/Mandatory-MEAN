var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/', function (req, res, next) {
    User.find(function (err, users) {
        console.log('debug2');
        if (err) {
            return res.send(500, err);
        }
        return res.status(200).send(users);
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