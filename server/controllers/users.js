// This is our controller
// require mongoose so that we can access the model 
var mongoose = require('mongoose'); 
var User = mongoose.model('User');
module.exports = (function(){
	// return because we want to put an object into the variable for whatever requires this 
 	return { 
				signUp: function(req, res) {

					console.log(req.body);
					User.findOne({ email: req.body.email }, function(err, user) {
						if (user === null) {
							user = new User({email:req.body.email, position:req.body.position, reason:req.body.reason});
							user.created_at = new Date();
							user.save(function(err, data){
								if (err){
									console.log("Did not save");
									res.status(400).send('Could not save user!');
								} else {
									console.log(data);
									res.json(data);
								}
							});
						} else {
							res.status(400).send('User already exists!');
						}
					});
					// user.find({}, function(err, data) {
					// 	console.log("came back from the model");
					// 	if(err) {
					// 		console.log("NOOOOO");
					// 	} else {
					// 		console.log("HELL YEAH", data);
					// 		res.json(data);
					// 	}
					// })
				},

				update: function(req, res) {
					User.findOne({ email: req.body.confirm_email }, function(err, user) {
						if (user) {
							user.first_name = req.body.first_name;
							user.last_name = req.body.last_name;
							user.age = req.body.age;
							user.gender = req.body.gender;
							user.location = req.body.location;
							user.challenge = req.body.challenge;
							user.save(function(err) {
								res.json(user);
							})
						} else {
							res.status(400).send('Error saving data to the database');
						}
					});
				}

				

//-------------- add methods above this line--------------------
}})();
