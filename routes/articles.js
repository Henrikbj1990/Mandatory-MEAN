var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Article = mongoose.model('Article');
var bCrypt = require('bcrypt-nodejs');

router.get('/', function (req, res, next) {
    Article.find(function (err, articles) {
        console.log('debug2');
        if (err) {
            return res.send(500, err);
        }
        return res.status(200).send(articles);
    });
});

router.get('/:id', function (req, res, next) {
    Article.findOne({
        _id: req.params.id
    }, function (err, data) {
        res.json(data);
    });
});

router.delete('/:id', function (req, res, next) {
    Article.findByIdAndRemove(req.params.id, function (err) {
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
    Article.create(req.body, function (err, data) {
        if (err) {
            console.error(err);
            return
        }
        res.json(data);
    });
});

router.post('/:id', function (req, res, next) {
    var query = {
        _id: req.params.id
    };
    Article.findOneAndUpdate(query, req.body, function (err, data) {
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