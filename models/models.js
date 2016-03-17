var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String //hash created from password
});

var articleSchema = new mongoose.Schema({
    created_by: String,
    created_at: String,
    title: String,
    body: String
});

mongoose.model('User', userSchema);
mongoose.model('Article', articleSchema);