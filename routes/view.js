var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
  res.render("partials/login",{ title: 'login'});
});

router.get('/task', function(req, res, next) {
  res.render("partials/task",{ title: 'task'});
});

router.get('/addtask', function(req, res, next) {
  res.render("partials/addtask",{ title: 'addtask'});
});

module.exports = router;