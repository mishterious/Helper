var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  email: String,
  position: String,
  reason:  String,
  first_name:  String,
  last_name: String,
  age: Number,
  gender: String,
  location: String,
  difficulty: String,
  created_at: Date
});

module.exports = mongoose.model('User', UserSchema);