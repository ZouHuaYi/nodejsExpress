/*
 * @Description: data 链接池的使用
 * @Author: zouhuayi
 * @Date: 2019-01-23 17:29:08
 * @LastEditors: zouhuayi
 * @LastEditTime: 2019-01-24 09:45:29
 */
var mysql = require('mysql');
var config = require('./config');

var pool = mysql.createPool(config.mysql_dev);

pool.on('connection', function () {
    console.log('contection start');
});

pool.on('enqueue', function () {
    console.log('Waiting for available connection slot');
})

// pool.end(callback) 关闭链接池 - pool.getConnection() 将不会被执行

exports.pool = pool;