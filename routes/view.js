var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
  res.render("partials/login",{ title: 'login'});
});

module.exports = router;