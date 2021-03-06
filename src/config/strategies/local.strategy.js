var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    bCrypt = require('bcrypt-nodejs');


module.exports = function () { //signup strategy
    passport.use('signup', new LocalStrategy({
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function (req, username, password, done) {

            // find a user in mongo with provided username
            User.findOne({
                'username': username
            }, function (err, user) {
                // In case of any error, return using the done method
                if (err) {
                    console.log('Error in SignUp: ' + err);
                    return done(err);
                }
                // already exists
                if (user) {
                    console.log('User already exists with username: ' + username);
                    return done(null, false, { message: 'Username already exist' });
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
                            throw err;
                        }
                        console.log(newUser.username + ' Registration succesful with email: ' + newUser.email);
                        return done(null, newUser);
                    });
                }
            });
        }));
    //login strategy
    passport.use('login', new LocalStrategy({
            passReqToCallback: true
        },
        function (req, username, password, done) {
            // check in mongo if a user with username exists or not
            User.findOne({
                    'username': username
                },
                function (err, user) {
                    // In case of any error, return using the done method
                    if (err)
                        return done(err);
                    // Username does not exist, log error & redirect back
                    if (!user) {
                        console.log('User Not Found with username ' + username);
                        return done(null, false, { message: 'Invalid username' });
                    }
                    // User exists but wrong password, log the error 
                    if (!isValidPassword(user, password)) {
                        console.log('Invalid Password');
                        return done(null, false, { message: 'Invalid password' });
                    }
                    // User and password both match, return user from 
                    // done method which will be treated like success
                    console.log("User logged in")
                    return done(null, user);
                }
            );
        }));
    var isValidPassword = function (user, password) {
        return bCrypt.compareSync(password, user.password);
    };
    // Generates hash using bCrypt
    var createHash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };
}