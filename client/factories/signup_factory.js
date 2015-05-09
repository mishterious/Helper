// make the factory call it FriendFactory and pass it a callback function telling us that we are going to use $http functionality
helper.factory('SignupFactory', function($http) {
	var factory= {};
	var lists = [];
	// get all friends from the backend pass it a callback function so we can make things run synchronously 
	
	factory.signup = function(data, callback) {
		console.log(data);
		console.log('in the factory');
		// send a get request to the url '/friends_json'
		$http.post('/user/signup', data).success(function(output) {	
			user = "returned to factory";
		// 	console.log(user);
		// 	// we run a callback so that the controller can do things synchronously
			callback(user);
		})
	}

	factory.get_all_users = function(callback) {
		// send a get request to the url '/friends_json'
		console.log('all users here');
		$http.get('/user/all_users').success(function(output) {
			// we run a callback so that the controller can do things synchronously
			callback(output);
		})
	}

	factory.add_list = function(data, callback){
		console.log(data);
		$http.post('/user/add_list', data).success(function(output){
			callback(lists);
		})
	}
	return factory;
})

// helper.factory('BucketFactory', function($http){
// 	var factory = {};
// 	var lists = [];

// 	factory.get_bucketlist =  function(data, callback){
// 		$http.post('/bucketlist/get_list', data).success(function(output){
// 			callback(output);
// 		})
// 	}

// 	factory.get_user_by_id = function(data, callback){
// 		$http.post('bucketlist/get_user_by_id', data).success(function(output){
// 			callback(output);
// 		})

// 	}



// 	return factory;
// })