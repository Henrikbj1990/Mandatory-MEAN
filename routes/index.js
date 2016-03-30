var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',
    function (req, res, next) {
        res.render('index', {
            title: 'Frontpage'
        });
    });

router.get('/login', function (req, res, next) {
    res.render('login', 
               {
        title: 'Login',
        message: req.flash('error')
                })
    });

router.get('/contents', function (req, res, next) {
    res.render('contents', {
        title: 'Contents'
    });
});

module.exports = router;