/*
 * @Description: util database query
 * @Author: zouhuayi
 * @Date: 2019-01-23 17:46:58
 * @LastEditors: zouhuayi
 * @LastEditTime: 2019-01-23 17:58:13
 */

var db = require('../database');

var query = function (sql, data, callback) {
    db.pool.getConnection(function (err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [...data], function (err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
        });
    });
}

module.exports = query;
