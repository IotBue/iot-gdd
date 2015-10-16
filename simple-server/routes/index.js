var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/step-2', function(req, res, next) {
  res.render('complex-index', { title: 'Express' });
});

module.exports = router;
