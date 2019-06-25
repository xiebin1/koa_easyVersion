const mysql = require('mysql');

module.exports = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
    port:3306,
    database:'list'
})