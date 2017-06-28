(function() {	
	'use strict';
     
	/**
	* task add Controller
	*
	* Description
	*/
	angular.module('App')
	.controller('addtaskCtrl', ['$scope','$http','AlertServ',function($scope,$http,AlertServ){
		console.log("I am in addtask ctrl");
        
		$scope.task = {};

		$scope.taskAddSubmit = function(){
			console.log($scope.task);
	    $http({
          method : "POST",
          url : "/add_task/adding_task",
          data : {taskData : $scope.task}
    	 }).then(function(response) {
    	 	if(response.data.success == true){
           console.log("Successfull in post");
           	AlertServ.successAlert("Task was Saved Successfully!");
       }
    	 
    	});

			
		};

	}]);
})();