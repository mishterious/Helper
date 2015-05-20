var users = require('../controllers/users');
var applicants = require('../controllers/applicants');

module.exports = function(app){
	app.get('/', function(req,res){
		console.log('123123');
		res.render('index');
	})

	app.post('/user/signup',function(req,res){
			console.log("in the routes");
			users.signUp(req,res);
	});

	app.post('/user/update', function(req,res){
			users.update(req,res);
	});

	app.post('/applicant/apply', function(req,res){
			applicants.apply(req,res);
	});

	
}