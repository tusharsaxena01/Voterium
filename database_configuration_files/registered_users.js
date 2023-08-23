var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: 'toor',
  database: 'aadhar'
});
// dropping table
    var sql = "DROP TABLE registered_users";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table deleted");
    });
    var sql = "CREATE TABLE registered_users (name VARCHAR(255), party VARCHAR(20), age int, qualification VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
    