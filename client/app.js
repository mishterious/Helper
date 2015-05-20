//Setting up the angular app (module)
// var myApp = angular.module('myApp',[]);
var helper = angular.module('helper',['ngRoute', 'LocalStorageModule', 'duScroll']);

//partial code goes in here:
// config method to setup routing
helper.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/landing.html'
		})
		.when('/dashboard', {
			templateUrl: 'partials/dashboard.html'
		})
		.when('/user/:userId',{
			templateUrl: 'partials/userbyid.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
