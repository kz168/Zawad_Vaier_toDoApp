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
		});
     

	}]);

	
})();