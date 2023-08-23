var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: 'toor',
  database: 'aadhar'
});

con.connect(function(err) {
//dropping table if exists
    var sql = "DROP TABLE aadhar_info";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table deleted");
    });
    var sql = "CREATE TABLE aadhar_info(name varchar(255), Aadharno bigint, Email varchar(255), Phoneno varchar(255), Gender varchar(2), Dob date, is_registered varchar(10), account_address varchar(255))";
    con.query(sql, function (err, result){
        if (err) throw err;
        console.log("Table Created!");
    });
    // entering demo data here

    let data_query = "INSERT INTO aadhar_info(name, Aadharno, Email, Phoneno, Gender, Dob, account_address) VALUES('NAMAN', 990035686857, 'naman.mw4@gmail.com', '+919455241118', 'M', '2001-09-10', '0x119E076B7B9dED103BB1113a9E6B35D86b700beb')"; //choosing random dob ;-P

    con.query(data_query, function(err, result){
        if (err) throw err;
        console.log("Data Entered!");
        console.log(data_query);
    });

    //fetching the data in terminal

    let query = "SELECT * FROM aadhar_info";
    // console.log(con.query(query));
    con.query(query);
});