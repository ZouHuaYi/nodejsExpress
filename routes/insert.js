var express = require('express');
var router = express.Router();
var InsertTest = require('../model/InsertTest');
var randomNumber = require('../utils/randomNumber');
var city = require('../city');
var randomStr = require('../utils/random');
var insert = new InsertTest();

router.get('/', function (req, res, next) {
    res.send('好海哦');
})

function insertNum(num) {
    if (num <= 0) return;
    var data = {
        name: randomStr(true, 5, 20),
        city: city[randomNumber(0, 33)]['name'],
        status: randomNumber(0, 4),
        price: randomNumber(1, 900000),
        count: randomNumber(1, 50000)
    }

    insert.insert({ ...data }, function (err, result) {
        if (err) {
            console.log("出错了");
        } else {
            num--;
            insertNum(num)
        }
    })
}


module.exports = router;