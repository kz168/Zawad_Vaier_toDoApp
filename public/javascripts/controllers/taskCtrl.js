(function() {
	'use strict';

	/**
	* task Controller
	*
	* Description
	*/
	angular.module('App')
	.controller('taskCtrl', ['$scope','$http', function($scope,$http){
		console.log("I am in task ctrl");
		$scope.taskList;
		$scope.task;
		$scope.noData = true;
		
       $scope.getTaskList = function(){
       	console.log("inside getTaskList");
		$http({
		  method : "GET",
          url : "add_task/display_task"
		}).then(function successCallback(response) {
			console.log(response.data.data);
			$scope.taskList = response.data.data;
			//$scope.task=$scope.taskList[0];
			console.log($scope.taskList);
			if($scope.taskList.length != 0){
			$scope.noData = false;
		   }
			
		  
		  }, function errorCallback(error) {
		  	console.log(error);
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
	};
        
	    $scope.getTaskList();
       console.log($scope.noData);
		/*$scope.task =task;
      console.log("This is Task "+$scope.task);*/
	}]);
})();