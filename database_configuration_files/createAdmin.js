var mysql = require('mysql');
var db=require('../database');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: 'toor',
  database: 'aadhar'
});

// dropping table
// var sql = "DROP TABLE registration";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table deleted");
// });

var sql = "delete from registration where last_name='admin'";
con.query(sql, function(err, result){
    if (err) throw err;
    console.log("Record Deleted!");
});

// con.connect(function(err) {
//     if (err) throw err;
    var sql = "INSERT INTO registration(first_name, last_name, gender, email_address, password, confirm_password) VALUES('admin', 'admin', 'male', 'admin@admin.com', 'admin', 'admin')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
        console.log(sql);
    });
// });
/*
var sql = 'INSERT INTO registration SET ?';
    console.log(sql);
   db.query(sql, inputData, function (err, data) {
      if (err) throw err;
           });
  var msg ="Your are successfully registered";*/