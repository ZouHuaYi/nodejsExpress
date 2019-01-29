
var query = require('../utils/dataQuery');

var Join = function () { };

var LEFT_TABLE = 'dom_left';
var RIGHT_TABLE = 'dom_right';

Join.prototype.inner = function (callback) {
    var sql = "SELECT l.name,l.id,l.country,l.url,r.date,r.count,r.id as rid FROM dom_left l INNER JOIN dom_right r ON l.id=r.l_id";
    query(sql, callback);
}

Join.prototype.left = function (callback) {
    var sql = "SELECT l.name,l.id,l.country,l.url,r.date,r.count,r.id as rid FROM dom_left l LEFT JOIN dom_right r ON l.id=r.l_id";
    query(sql, callback);
}

Join.prototype.right = function (callback) {
    var sql = "SELECT l.name,l.id,l.country,l.url,r.date,r.count,r.id as rid FROM dom_left l RIGHT JOIN dom_right r ON l.id=r.l_id";
    query(sql, callback);
}



module.exports = Join;

