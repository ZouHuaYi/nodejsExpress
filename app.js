/*
 * @Description: main app  input page
 * @Author: zouhuayi
 * @Date: 2019-01-23 10:25:45
 * @LastEditors: zouhuayi
 * @LastEditTime: 2019-01-23 15:21:18
 */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var interceptor = require('./middleware/routeInterceptor');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var zhyRouter = require('./routes/zhy')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 设置的公共目录 app.use('/static', express.static('public')) 文件别名 static
app.use(express.static(path.join(__dirname, 'public')));


app.use(interceptor);


// 渲染路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/zhy/:id', zhyRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

console.log("我的git可以工作了")
console.log("我的git可以工作了")

console.log("我的git可以工作了")
console.log("我的git可以工作了")

module.exports = app;