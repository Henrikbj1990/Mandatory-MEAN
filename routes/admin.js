var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/',
    function (req, res, next) {
        res.render('admin/users', {
            title: 'Users'
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