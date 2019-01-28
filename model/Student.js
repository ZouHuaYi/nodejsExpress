/*
 * @Description: student 
 * @Author: zouhuayi
 * @Date: 2019-01-28 13:35:48
 * @LastEditors: zouhuayi
 * @LastEditTime: 2019-01-28 18:03:10
 */

var query = require('../utils/dataQuery');

var Student = function () { };
const TABLE_NAME = 'test_student';


Student.prototype.find = function (id, callback) {
    var sql = "SELECT * FROM :table WHERE id=:id";
    query(sql, { id: id, table: TABLE_NAME }, callback);
};

Student.prototype.findAll = function (callback) {
    var sql = "SELECT class_id FROM :table";
    query(sql, { table: TABLE_NAME }, callback);
}

Student.prototype.findClass = function (id, callback) {
    // 内连接查询所有的值 INNER JOIN  ON  后面加了WHERE 条件后只是查看一条了
    var sql = "SELECT test_student.id,test_student.name,test_class.class_name FROM test_student INNER JOIN test_class ON test_student.class_id=test_class.id WHERE test_student.id=:id"
    query(sql, { id: id }, callback);

}

Student.prototype.findStu = function (id, callback) {
    // 内连接查询所有的值 INNER JOIN  ON  查看某个年级的所有学生
    var sql = "SELECT test_student.id,test_student.name,test_class.class_name FROM test_student INNER JOIN test_class ON test_student.class_id=test_class.id WHERE test_class.id=:id"
    query(sql, { id: id }, callback);

}

Student.prototype.findKc = function (id, callback) {
    // 内连接查询所有的值 INNER JOIN  ON  查看某个年级的所有学生
    var sql = "SELECT s.id,k.k_name,s.name as sid,k.id FROM test_student s LEFT JOIN test_center c on s.id=c.s_id LEFT JOIN test_kc k on k.id=c.c_id WHERE k.id IS NOT NULL AND s.id IS NOT NULL";
    query(sql, { id: id }, callback);
}


module.exports = Student;
