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

router.delete('/:id', function (req, res) {
    User.remove({
        _id: req.params.id
    }, function (err) {
        if (err)
            res.send(err);
        res.json("deleted :(");
    });
});

router.get('/editUser/:id', function (req, res, next) {
    User.findOne({
            '_id': req.params.id
        },
        function (err, user) {
            res.json({
                title: "Edit User",
                name: user.username,
                email: user.email,
                password: user.password
            });
        });
});

router.post('/', function (req, res) {
    var username = req.param('username');
    var password = req.param('password');

    User.findOne({
        'username': username
    }, function (err, user) {
        // In case of any error, return using the done method
        if (err) {
            console.log('Error in creation: ' + err);
        }
        // already exists
        if (user) {
            console.log('User already exists with username: ' + username);
        } else {
            // if there is no user, create the user
            var newUser = new User();

            // set the user's local credentials
            newUser.username = username;
            newUser.email = req.param('email');
            newUser.password = createHash(password);

            // save the user
            newUser.save(function (err) {
                if (err) {
                    console.log('Error in Saving user: ' + err);
                }
                console.log(newUser.username + ' created succesful with email: ' + newUser.email);
                res.redirect('/admin/users');
            });
        }
    });

});


// Generates hash using bCrypt
var createHash = function (password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

module.exports = router;