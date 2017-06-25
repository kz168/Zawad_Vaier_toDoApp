var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// Using bluebird as promise library
mongoose.Promise = require('bluebird');

//Importing task model from Models
var taskModel = require('../models/taskModel.js');

var errorMessageHandler = function(message, error){
	return {
		success: false,
		message: message,
		error : error
	};
};


var successMessageHandler = function(message, data){
	return {
		success: true,
		message: message,
		data : data
	};
};

router.post('/adding_task', function(request, response, next) {
   console.log("requested to adding task");
    console.log(request.body);
   if(request.body){
  var taskObject = new taskModel(request.body.taskData);
  var error = taskObject.validateSync();

  if(error){
  	console.log("Error found in add_task/adding_task");
  	response.status(400).json(errorMessageHandler("data not validated and saved", error));
  }else{
  	taskObject.save(function(error,doc){
  		if(error){
		   console.log("error found in add_task/adding_task at the save query");
			response.status(500).json(errorMessageHandler("unable to save data", error));
		}else{
		   response.status(200).json(successMessageHandler("new data has been saved", doc));
			console.log("new task added");
		}

  		});

    }
   }else{
   	console.log("request.body not found");
    response.status(500).json({"message":"invalid request"});

  }
});

router.get('/display_task',function(request, response, next) {
	console.log("requested to adding task");

	taskModel.find({})
	.exec(function(error, result){
		if(error){
			console.log("error found in add_task/adding_task at the find query");
			response.status(500).json(errorMessageHandler("unable to find data", error));
		}else{
			response.status(200).json(successMessageHandler("data has been found",result));
			console.log("task found");
		}
	});
});

module.exports=router;