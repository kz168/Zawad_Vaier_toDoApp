var mongoose = require("mongoose");

var taskSchema = new mongoose.Schema({
	title : {type : String, default:"Task Title"},
	description : {type : String}

});

module.exports = mongoose.model("task",taskSchema,"tasks");