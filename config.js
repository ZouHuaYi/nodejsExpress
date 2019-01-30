/*
 * @Description: mysql config
 * @Author: zouhuayi
 * @Date: 2019-01-23 21:31:20
 * @LastEditors: zouhuayiß
 */


module.exports = {
    mysql_dev: {
        host: 'localhost',
        port: '3306',
        user: 'express',
        password: '111111',
        database: 'express',
        connectionLimit: 100,
        supportBigNumbers: true,
        queueLimit:0,
        waitForConnections:true
    }
}
