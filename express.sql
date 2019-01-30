/*
Navicat MySQL Data Transfer

Source Server         : test本地
Source Server Version : 50725
Source Host           : localhost:3306
Source Database       : express

Target Server Type    : MYSQL
Target Server Version : 50725
File Encoding         : 65001

Date: 2019-01-29 18:13:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `dom_left`
-- ----------------------------
DROP TABLE IF EXISTS `dom_left`;
CREATE TABLE `dom_left` (
  `id` int(12) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `country` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dom_left
-- ----------------------------
INSERT INTO `dom_left` VALUES ('1', 'Google', 'https://www.google.cm/', 'usa');
INSERT INTO `dom_left` VALUES ('2', '淘宝', 'https://www.taobao.com/', 'cn');
INSERT INTO `dom_left` VALUES ('3', '菜鸟教程', 'http://www.runoob.com/', 'cn');
INSERT INTO `dom_left` VALUES ('4', '微博', 'http://weibo.com/', 'cn');
INSERT INTO `dom_left` VALUES ('5', 'Facebook', 'https://www.facebook.com/', 'usa');
INSERT INTO `dom_left` VALUES ('6', 'stackoverflow', 'http://stackoverflow.com/', 'ind');
INSERT INTO `dom_left` VALUES ('7', '百度', 'http://baidu.com', 'cn');

-- ----------------------------
-- Table structure for `dom_right`
-- ----------------------------
DROP TABLE IF EXISTS `dom_right`;
CREATE TABLE `dom_right` (
  `id` int(12) unsigned NOT NULL AUTO_INCREMENT,
  `l_id` int(12) unsigned DEFAULT NULL,
  `count` tinyint(8) DEFAULT NULL,
  `date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `l_ref` (`l_id`),
  CONSTRAINT `l_ref` FOREIGN KEY (`l_id`) REFERENCES `dom_left` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dom_right
-- ----------------------------
INSERT INTO `dom_right` VALUES ('1', '2', '45', '2019-01-23 09:55:29');
INSERT INTO `dom_right` VALUES ('2', '2', '56', '2019-01-24 09:56:00');
INSERT INTO `dom_right` VALUES ('3', '1', '78', '2019-01-25 09:56:25');
INSERT INTO `dom_right` VALUES ('4', '3', '42', '2019-01-26 09:57:53');
INSERT INTO `dom_right` VALUES ('5', '6', '23', '2019-01-27 09:58:17');
INSERT INTO `dom_right` VALUES ('6', '5', '90', '2019-01-28 09:58:41');
INSERT INTO `dom_right` VALUES ('7', '4', '80', '2019-01-01 09:59:25');
INSERT INTO `dom_right` VALUES ('8', '4', '67', '2019-01-04 09:59:44');
INSERT INTO `dom_right` VALUES ('9', '5', '67', '2019-01-19 10:00:11');
INSERT INTO `dom_right` VALUES ('10', '6', '89', '2019-01-29 10:15:21');
INSERT INTO `dom_right` VALUES ('11', '5', '76', '2019-01-17 15:36:13');
INSERT INTO `dom_right` VALUES ('12', null, '55', '2019-01-17 15:42:58');
INSERT INTO `dom_right` VALUES ('13', null, '56', '2019-01-20 15:44:13');

-- ----------------------------
-- Table structure for `test_center`
-- ----------------------------
DROP TABLE IF EXISTS `test_center`;
CREATE TABLE `test_center` (
  `s_id` int(12) unsigned NOT NULL,
  `c_id` int(12) unsigned NOT NULL,
  KEY `s_ref` (`s_id`),
  KEY `c_ref` (`c_id`),
  CONSTRAINT `c_ref` FOREIGN KEY (`c_id`) REFERENCES `test_kc` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `s_ref` FOREIGN KEY (`s_id`) REFERENCES `test_student` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test_center
-- ----------------------------
INSERT INTO `test_center` VALUES ('5', '1');
INSERT INTO `test_center` VALUES ('1', '2');
INSERT INTO `test_center` VALUES ('2', '3');
INSERT INTO `test_center` VALUES ('1', '2');
INSERT INTO `test_center` VALUES ('3', '2');
INSERT INTO `test_center` VALUES ('5', '5');

-- ----------------------------
-- Table structure for `test_class`
-- ----------------------------
DROP TABLE IF EXISTS `test_class`;
CREATE TABLE `test_class` (
  `id` int(12) unsigned NOT NULL AUTO_INCREMENT,
  `class_name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test_class
-- ----------------------------
INSERT INTO `test_class` VALUES ('1', '一年级');
INSERT INTO `test_class` VALUES ('2', '二年级');
INSERT INTO `test_class` VALUES ('3', '三年级');
INSERT INTO `test_class` VALUES ('4', '四年级');
INSERT INTO `test_class` VALUES ('5', '五年级');
INSERT INTO `test_class` VALUES ('6', '六年级');
INSERT INTO `test_class` VALUES ('7', '初一');
INSERT INTO `test_class` VALUES ('8', '初二');
INSERT INTO `test_class` VALUES ('9', '初三');
INSERT INTO `test_class` VALUES ('10', '一年级');

-- ----------------------------
-- Table structure for `test_kc`
-- ----------------------------
DROP TABLE IF EXISTS `test_kc`;
CREATE TABLE `test_kc` (
  `id` int(12) unsigned NOT NULL AUTO_INCREMENT,
  `k_name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test_kc
-- ----------------------------
INSERT INTO `test_kc` VALUES ('1', '英语');
INSERT INTO `test_kc` VALUES ('2', '数学');
INSERT INTO `test_kc` VALUES ('3', '语文');
INSERT INTO `test_kc` VALUES ('4', '物理');
INSERT INTO `test_kc` VALUES ('5', '化学');
INSERT INTO `test_kc` VALUES ('6', '生物');

-- ----------------------------
-- Table structure for `test_student`
-- ----------------------------
DROP TABLE IF EXISTS `test_student`;
CREATE TABLE `test_student` (
  `id` int(12) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `class_id` int(12) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `class_ref` (`class_id`),
  CONSTRAINT `class_ref` FOREIGN KEY (`class_id`) REFERENCES `test_class` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test_student
-- ----------------------------
INSERT INTO `test_student` VALUES ('1', '1邹华毅', '1');
INSERT INTO `test_student` VALUES ('2', '2邹', '2');
INSERT INTO `test_student` VALUES ('3', '3邹', '2');
INSERT INTO `test_student` VALUES ('4', '4邹', '2');
INSERT INTO `test_student` VALUES ('5', '5邹', '1');

-- ----------------------------
-- Table structure for `test_user`
-- ----------------------------
DROP TABLE IF EXISTS `test_user`;
CREATE TABLE `test_user` (
  `id` int(12) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `phone` char(16) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `status` tinyint(2) NOT NULL DEFAULT '0',
  `role` tinyint(4) NOT NULL DEFAULT '0',
  `create_time` char(16) DEFAULT NULL,
  `update_time` char(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone_index` (`phone`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test_user
-- ----------------------------
INSERT INTO `test_user` VALUES ('45', 'zouhuayi', '15016447091', '111111', '0', '0', '1548322394', '1548322394');
INSERT INTO `test_user` VALUES ('46', 'zouhuayi', '15016447087', '111111', '0', '0', '1548322461', '1548322461');
INSERT INTO `test_user` VALUES ('48', 'zouhuayi', '15016447089', '111111', '0', '0', '1548322532', '1548322532');
INSERT INTO `test_user` VALUES ('49', 'zouhuayi', '15016447085', '111111', '0', '0', '1548322557', '1548322557');
INSERT INTO `test_user` VALUES ('50', 'zouhuayi', '15016447067', '96e79218965eb72c92a549dd5a330112', '0', '0', '1548643944', '1548643944');
