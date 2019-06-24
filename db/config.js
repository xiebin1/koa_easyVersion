const mysql = require('mysql');

module.exports = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    port:3306,
    database:'list'
})