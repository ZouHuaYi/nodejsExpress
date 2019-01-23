/*
 * @Description: User models
 * @Author: zouhuayi
 * @Date: 2019-01-23 17:29:58
 * @LastEditors: zouhuayi
 * @LastEditTime: 2019-01-23 17:58:41
 */

var query = require('../utils/dataQuery');

var User = function () { };

User.prototype.find = function (id, callback) {
    var sql = "SELECT * FROM home WHERE id =?";
    query(sql, [id], callback);
};

module.exports = User;