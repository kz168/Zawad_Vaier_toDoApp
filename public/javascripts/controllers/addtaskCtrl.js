(function() {	
	'use strict';

	/**
	* login Controller
	*
	* Description
	*/
	angular.module('App')
	.controller('addtaskCtrl', ['$scope', function($scope){
		console.log("I am in addtask ctrl");

		$scope.task = {};

		$scope.taskAddSubmit = function(){
			console.log($scope.task);
			
		};

	}]);
})();