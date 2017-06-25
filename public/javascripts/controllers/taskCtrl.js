(function() {
	'use strict';

	/**
	* login Controller
	*
	* Description
	*/
	angular.module('App')
	.controller('taskCtrl', ['$scope','$http', function($scope,$http){
		console.log("I am in task ctrl");
		$scope.taskList = new Array();
		$scope.task;
		

		$http({
		  method : "GET",
          url : "add_task/display_task"
		}).then(function successCallback(response) {
			console.log(response.data.data);
			var taskArray = response.data.data;
			for(var i in taskArray){
				$scope.taskList.push(taskArray[i]);
			}
			$scope.task=taskArray[0];
			console.log($scope.taskList);
		  
		  }, function errorCallback(error) {
		  	console.log(error);
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
		/*$scope.task =task;
      console.log("This is Task "+$scope.task);*/
	}]);
})();