var express = require('express');
var router = express.Router();
var Student = require('../model/Student');
var ClassStudent = require('../model/ClassStudent');

var student = new Student();
var class_student = new ClassStudent();

/* GET home page. */
router.get('/:id', function (req, res, next) {
    var id = req.params.id
    student.find(id, function (err, result) {
        if (err) {
            if (result) {
                res.send(result);
            }
            res.send('出错啦');
        }
        class_student.find(result[0].class_id, function (err, result2) {
            if (err) {
                if (result2) {
                    res.send(result2);
                }
                res.send('出错啦!');
            }
            res.send(result2);
        })

    })

});

router.get('/:id/all', function (req, res, next) {
    student.findAll(function (err, result) {
        res.send(result);
    })
})


router.get('/:id/ground', function (req, res, next) {
    class_student.groundAll(function (err, result) {
        if (err) {
            res.send("出错了");
        }
        res.send(result);
    })
})

router.get('/:id/findStu', function (req, res, next) {
    var id = req.params.id;
    student.findStu(id, function (err, result) {
        if (err) {
            res.send("出错了");
        }
        res.send(result);
    })
})


router.get('/:id/findKc', function (req, res, next) {
    var id = req.params.id;
    student.findKc(1, function (err, result) {
        if (err) {

        }
        res.send(result);
    })



})



module.exports = router;