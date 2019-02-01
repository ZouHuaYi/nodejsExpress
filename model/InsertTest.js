var query = require("../utils/dataQuery");

var InsertTest = function() {};
var LEFT_TABLE = "test_select";

InsertTest.prototype.insert = function(data, callback) {
  var sql = "INSERT INTO test_select SET ?";
  query(sql, data, callback);
};

InsertTest.prototype.join = function(data, callback) {
  var sql = "INSERT INTO test_join SET ?";
  query(sql, data, callback);
};

module.exports = InsertTest;
