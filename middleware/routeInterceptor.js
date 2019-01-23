/*
 * @Description: this is route interceptor
 * @Author: zouhuayi
 * @Date: 2019-01-23 14:13:04
 * @LastEditors: zouhuayi
 * @LastEditTime: 2019-01-23 14:43:39
 */

var interceptor = function (req, res, next) {
    console.log('路由拦截中间件');
    next();
}
module.exports = interceptor