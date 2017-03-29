var express = require('express');
var router = express.Router();
var c = require('./calculate');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Roman equation creator' });
});

router.post('/calc', function(req, res, next) {
  res.render('index', { title: 'Roman equation creator', result: c.equation(req.body.first,req.body.second,req.body.third) });
});

module.exports = router;