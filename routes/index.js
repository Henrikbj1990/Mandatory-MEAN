var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Frontpage' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/articles', function(req, res, next) {
  res.render('articles', { title: 'Articles' });
});

module.exports = router;
