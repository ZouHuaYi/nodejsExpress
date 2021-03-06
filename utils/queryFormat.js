/*
 * @Description: query format
 * @Author: zouhuayi
 * @Date: 2019-01-25 17:10:34
 * @LastEditors: zouhuayi
 * @LastEditTime: 2019-01-30 17:14:25
 */

function formatSql(sql, values) {
    if (!values) return sql;
    return sql.replace(/:(\w+)/g, function (txt, key) {
        if (values.hasOwnProperty(key)) {
            if (typeof values[key] === 'string') {
                return this.escape(values[key]);
            } else {
                return '';
            }
        }
        return txt;
    }.bind(this))
}

module.exports = formatSql;


