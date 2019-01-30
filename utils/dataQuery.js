/*
 * @Description: util database query
 * @Author: zouhuayi
 * @Date: 2019-01-23 17:46:58
 * @LastEditors: zouhuayi
 * @LastEditTime: 2019-01-30 23:44:12
 */

var db = require('../database');
var formatSql = require('./queryFormat')

var query = function (sql, data, callback) {
    // 这里写 sql 防止注入的写法
    var sql = formatSql(sql, data);
    db.pool.getConnection(function (err, connection) {
        if (err) {
            callback(true, '无法连接');
            return;
        }
        // make the query
        connection.query(sql, data, function (err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
        });
           connection.release(); // 释放 连接放回连接池，等待其它使用者使用
    });
}


module.exports = query;
