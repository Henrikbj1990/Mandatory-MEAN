var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String //hash created from password
});

mongoose.model('User', userSchema);