var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

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