/*
 * @Description: class 
 * @Author: zouhuayi
 * @Date: 2019-01-28 13:35:48
 * @LastEditors: zouhuayi
 * @LastEditTime: 2019-01-28 15:03:05
 */

var query = require('../utils/dataQuery');

var ClassStudent = function () { };
const TABLE_NAME = 'test_class';


ClassStudent.prototype.find = function (id, callback) {
    var sql = "SELECT * FROM :table WHERE id = :id";
    query(sql, { id: id, table: TABLE_NAME }, callback);
};


ClassStudent.prototype.groundAll = function (callback) {
    var sql = "SELECT class_name as name,COUNT(*) as num FROM test_class GROUP BY name";
    query(sql, null, callback);
}



module.exports = ClassStudent;
