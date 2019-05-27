var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
});
  
var User = mongoose.model('users', UserSchema);

module.exports = User