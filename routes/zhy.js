var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/:id', function (req, res, next) {
    console.log(req.params, 'reqs')
    res.send(req.params)
    // res.render('zhy', { title: 'ZHY' });
});


module.exports = router;