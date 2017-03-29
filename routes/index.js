var express = require('express');
var router = express.Router();
var e = require('./calculate');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Roman equation creator' });
});

router.post('/calc', function(req, res, next) {
  res.render('index', { title: 'Roman equation creator', result: e.equation(req.body) });
});

module.exports = router;