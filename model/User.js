/*
 * @Description: User models
 * @Author: zouhuayi
 * @Date: 2019-01-23 17:29:58
 * @LastEditors: zouhuayi
 * @LastEditTime: 2019-01-25 17:53:03
 */

var query = require('../utils/dataQuery');
var User = function () { };
const TABLE_NAME = 'test_user';


User.prototype.find = function (id, callback) {
    var sql = "SELECT * FROM :table WHERE id = :id";
    query(sql, { id: id, table: TABLE_NAME }, callback);
};

User.prototype.insert = function (data, callback) {
    var sql = "INSERT INTO " + TABLE_NAME + " SET ?";
    query(sql, data, callback);
}

User.prototype.update = function (id, callback) {

}

User.prototype.delete = function (id, callback) {

}


module.exports = User;