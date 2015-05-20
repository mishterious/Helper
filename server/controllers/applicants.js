// This is our controller
// require mongoose so that we can access the model 
var mongoose = require('mongoose'); 
var Applicant = mongoose.model('Applicant');
module.exports = (function(){
	// return because we want to put an object into the variable for whatever requires this 
 	return { 
				apply: function(req, res) {
					Applicant.findOne({ email: req.body.email }, function(err, applicant) {
						if (applicant === null) {
							applicant = new Applicant(req.body);
							applicant.created_at = new Date();
							applicant.save(function(err, data){
								if (err){
									console.log("Did not save");
									res.status(400).send('Could not save applicant!');
								} else {
									console.log(data);
									res.json(data);
								}
							});
						} else {
							res.status(400).send('Applicant already exists!');
						}
					});
				}
//-------------- add methods above this line--------------------
}})();