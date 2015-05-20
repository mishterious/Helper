
helper.controller('SignupCtrl', function($rootScope, $scope, $location, SignupFactory,localStorageService) {
	$(document).ready(function(){
		// $('#switcher').click(function() {
		// 	$('#first_section').fadeOut(500, function() {
		// 		$('#second_section').fadeIn(500)
		// 	})
		// })
		$('#terms_switcher').click(function() {
			$('#first_section').fadeOut(500, function() {
				$('#third_section').fadeIn(500)
			})
		})
	})

	$scope.users = {};
	$scope.person = localStorageService.get('name');
	console.log("in the controller");

	console.log(localStorage.email);

	$scope.signup = function(isValid){
		SignupFactory.signup({email: $scope.email, position: $scope.current_position, reason:$scope.reason}, function(output){
			console.log($scope);
			console.log("back in controller");
			localStorage.email = output.email;
			// $scope.users = output;
			// $rootScope.users = output;
		});
	}

	$scope.update = function(isValid){
		if ($scope.info.confirm_email === localStorage.email) {
			SignupFactory.update($scope.info, function(output) {
				$scope.message = { success: 'Your information has been submitted.' };
			});
		} else {
			$scope.message = { error: 'Email does not match. Please try again.' };
			console.log('Info does not match');
		}
		// console.log($scope);
	}

	$scope.login = function() {
		// FriendFactory.getFriends takes a callback function that has the output as a parameter
		UserFactory.addUser({name: $scope.user.name}, function(output) {
			localStorageService.set('name', output);
			$rootScope.name = output;
			console.log($scope.person);
			console.log($scope.user.name);
			$location.path('/dashboard');
		});
	}

	$scope.add_bucket = function(data){
		console.log($scope.bucket);
		var date = new Date();
		$scope.bucket.name = data;
		$scope.bucket.date = date;
		UserFactory.add_list($scope.bucket, function(output){
			$scope.bucketlist = output;
			console.log($scope.bucketlist);
		});
	}
});

// helper.controller('BucketlistCtrl', function($rootScope, $routeParams, $scope, $location, BucketFactory,localStorageService) {
// 	get_bucketlist();
// 	get_userbyid();
// 	$scope.bucketlist = {};
// 	$scope.items = {};
// 	console.log($routeParams.userId, "12312312");

// 	function get_bucketlist(){
// 		BucketFactory.get_bucketlist({name: $rootScope.name}, function(output){
// 			console.log(output);
// 			$scope.bucketlist = output;
// 		});
// 	}

// 	function get_userbyid(){
// 		BucketFactory.get_user_by_id({_id:$routeParams.userId}, function(output){
// 			console.log(output);
// 			$scope.items=output;
// 			console.log($scope.items);
// 		})

// 	}

// });