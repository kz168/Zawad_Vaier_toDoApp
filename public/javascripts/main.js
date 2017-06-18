(function() {
	'use strict';
	
	angular.module('App',[
		'ngRoute',
		'oc.lazyLoad',
   ])
	.constant('serverRequestAddr', {
		devServerAdd : 'http://localhost:3000'
	})
     .config(['$routeProvider','$locationProvider','serverRequestAddr','$httpProvider',function($routeProvider, $locationProvider, serverRequestAddr,$httpProvider){


     	$routeProvider
		.when('/', {
			templateUrl: serverRequestAddr.devServerAdd + '/view/login', // sends request to server for html page
			controller: 'loginCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						files : [
						serverRequestAddr.devServerAdd + '/javascripts/controllers/loginCtrl.js',
						]})
				}]
			}
		})

		.when('/task', {
			templateUrl: serverRequestAddr.devServerAdd + '/view/task', // sends request to server for html page
			controller: 'taskCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						files : [
						serverRequestAddr.devServerAdd + '/javascripts/controllers/taskCtrl.js',
						]})
				}]
			}
		})

			.when('/addtask', {
			templateUrl: serverRequestAddr.devServerAdd + '/view/addtask', // sends request to server for html page
			controller: 'addtaskCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						files : [
						serverRequestAddr.devServerAdd + '/javascripts/controllers/addtaskCtrl.js',
						]})
				}]
			}
		})

		.otherwise('/');
		$locationProvider.hashPrefix('');
     

	}]);

	
})();