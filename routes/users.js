var express = require('express');
var router = express.Router();
var User = require('../model/User');


/* GET users listing. */
router.get('/', function (req, res, next) {
  var userid = '2';
  var user = new User();
  user.find(userid, function (err, result) {
    if (err) {
      res.send('not found');
    }
    res.send(result.length === 1 ? result[0] : result);
  });
});

module.exports = router;
