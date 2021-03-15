const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port:3306,
  // database : 'oumd',
  database : 'medicine_donation',

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;