var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: 'toor'
});

con.connect(function(err) {
  if (err) throw err;

  // drop database

  
  console.log("Connected!");
  /*Create a database named "mydb":*/
  con.query("CREATE DATABASE aadhar", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

    var sql = "DROP TABLE aadhar_info";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table deleted");
    });
    var sql = "CREATE TABLE aadhar_info(Aadharno bigint, Dob date)";
    con.query(sql, function (err, result){
        if (err) throw err;
        console.log("Table Created!");
    });

    
});