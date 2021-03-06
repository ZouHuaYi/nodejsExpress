var express = require('express');
var router = express.Router();
var User = require('../model/User');
var crypto = require('crypto');


var user = new User();
var md5 = crypto.createHash('md5');

/* GET users listing. */
router.get('/', function (req, res, next) {
  var userid = '45';
  user.find(userid, function (err, result) {
    if (err) {
      res.send('not found');
    }
    // res.send(result);
  });
  res.render('users')
});

router.post('/', function (req, res, next) {

  var tim = Math.round(new Date().getTime() / 1000) + '';
  req.body.password = md5.update(req.body.password).digest('hex');
  var body = {
    ...req.body,
    create_time: tim,
    update_time: tim
  }

  try {
    user.insert(body, function (err, result) {
      if (err) {
        if (result) {
          res.send(result);
        }
        res.send('电话号码相同');
      }
      res.send(result['insertId'].toString());
    })
  } catch (error) {
    res.send('ok');
  }

})


module.exports = router;
