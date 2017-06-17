var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zawad Vaier ToDOApp' });
  console.log("I am here inside index.js");
});

module.exports = router;
