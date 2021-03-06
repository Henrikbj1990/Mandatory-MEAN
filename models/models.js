var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    fullName: String,
    address: String,
    zipCode: String,
    city: String,
    role: String
});

var roleSchema = new mongoose.Schema({
    name: String
});

var articleSchema = new mongoose.Schema({
    created_by: String,
    created_at: String,
    title: String,
    body: String,
    category: String,
    tags: []
});

var tagSchema = new mongoose.Schema({
    name: String
});

var categorySchema = new mongoose.Schema({
    name: String
});

mongoose.model('User', userSchema);
mongoose.model('Article', articleSchema);
mongoose.model('Tag', tagSchema);
mongoose.model('Category', categorySchema);
mongoose.model('Role', roleSchema);