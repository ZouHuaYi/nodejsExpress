var express = require('express');
var router = express.Router();

var Join = require('../model/Join');
var join = new Join();

router.get('/', function (req, res, next) {
    join.inner(function (err, result) {
        if (err) {
            res.send('出错了');
        }
        res.send(result);
    })
})

router.get('/left', function (req, res, next) {
    join.left(function (err, result) {
        if (err) {
            res.send('出错了');
        }
        res.send(result);
    })
})

router.get('/right', function (req, res, next) {
    join.right(function (err, result) {
        if (err) {
            res.send('出错了');
        }
        res.send(result);
    })
})


module.exports = router;