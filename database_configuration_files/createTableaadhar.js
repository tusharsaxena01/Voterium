var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: 'toor',
  database: 'aadhar'
});
// dropping table
    var sql = "DROP TABLE registration";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table deleted");
    });
    var sql = "CREATE TABLE registration (id int, first_name VARCHAR(255), last_name VARCHAR(255),  gender VARCHAR(6), email_address VARCHAR(255) primary key, password VARCHAR(255), confirm_password VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });