var express = require('express');
var router = express.Router();

router.get('/register', function(req, res, next) {
  res.send('here you register');
});

router.post('/register', function(req, res, next) {
    var username = req.body['username'];
  res.send('Hello ' + username + '!');
});

router.get('/login', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

/*Her skal ændres nogle routes. Den tjekker ikke i databasen efter brugere når man prøver at logge ind*/
