

var query = require('../utils/dataQuery');

var JoinTest = function(){};
var TABLE_NAME = 'dom_left';

JoinTest.prototype.left = function(data,callback){
    var sql = "";
    query(sql,{...data,table:TABLE_NAME},callback);
}