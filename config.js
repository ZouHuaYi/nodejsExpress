/*
 * @Description: mysql config
 * @Author: zouhuayi
 * @Date: 2019-01-23 21:31:20
 * @LastEditors: zouhuayi
 * @LastEditTime: 2019-01-24 22:47:40
 */

module.exports = {
   mysql_dev: {
       host: 'localhost',
       port: '3306',
       user: 'express',
       password: '111111',
       database: 'express',
       connectionLimit: 10,
       supportBigNumbers: true
   }
}