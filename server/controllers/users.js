// This is our controller
// require mongoose so that we can access the model 
var mongoose = require('mongoose'); 
var User = mongoose.model('User');
module.exports = (function(){
	// return because we want to put an object into the variable for whatever requires this 
 	return { 
				signUp: function(req, res) {

					console.log(req.body);
					var user = new User({email:req.body.email, position:req.body.position, reason:req.body.reason});
					user.save(function(err, data){
						
						if (err){
							console.log("Did not save");
						} else {
							console.log(data);
							res.json(data);
						}
					})
					// user.find({}, function(err, data) {
					// 	console.log("came back from the model");
					// 	if(err) {
					// 		console.log("NOOOOO");
					// 	} else {
					// 		console.log("HELL YEAH", data);
					// 		res.json(data);
					// 	}
					// })
				}

				

//-------------- add methods above this line--------------------
}})();
