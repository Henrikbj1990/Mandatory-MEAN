var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tag = mongoose.model('Tag');
var bCrypt = require('bcrypt-nodejs');

router.get('/', function (req, res, next) {
    Tag.find(function (err, tags) {
        console.log('debug2');
        if (err) {
            return res.send(500, err);
        }
        return res.status(200).send(tags);
    });
});

router.get('/:id', function (req, res, next) {
    Tag.findOne({
        _id: req.params.id
    }, function (err, data) {
        res.json(data);
    });
});

router.delete('/:id', function (req, res, next) {
    Tag.findByIdAndRemove(req.params.id, function (err) {
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

router.post('/', function (req, res, next) {
    Tag.findOne({
        name: req.body.name
    }, function (err, data) {
        if (data == null) {
            Tag.create(req.body, function (err, data) {
                if (err) {
                    console.error(err);
                    return
                }
                res.json(data);
            })
        } else {
            res.json({
                err: "Tag already exists"
            })
        }

    });

});

router.post('/:id', function (req, res, next) {
    var query = {
        _id: req.params.id
    };
    Tag.findOneAndUpdate(query, req.body, function (err, data) {
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
module.exports = router;