var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ApplicantSchema = new mongoose.Schema({
  email: String,
  name: String,
  profile: String,
  created_at: Date
});

module.exports = mongoose.model('Applicant', ApplicantSchema);