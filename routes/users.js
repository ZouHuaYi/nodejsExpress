var express = require('express');
var router = express.Router();
var User = require('../model/User');

var user = new User();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var userid = '1';
  user.find(userid, function (err, result) {
    if (err) {
      res.send('not found');
    }
    // res.send(result.length === 1 ? result[0] : result);
  });
  res.render('users')
});

router.post('/', function (req, res, next) {

  var tim = Math.round(new Date().getTime() / 1000) + '';
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
