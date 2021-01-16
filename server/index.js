var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var connection = require('./db.connection')

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser({ extended: false }))

app.use(cors())
 

app.post('/register', function (req, res) {
   // Prepare output in JSON format
   response = req.body;
  const  data = { 
    personId: Math.floor(Math.random() * 10000),
    fullName: response.fullName,
    pass: response.password,
    email: response.email,
    roleId: +response.role,
    ngo_name: response.ngo_name,
    mobile_no:  +response.mobile_no,
    address: response.address,
    year_establishment: +response.year_establishment
}

const d =Object.values(data);
console.log(d);
const sql1 = "INSERT INTO register(personId,fullName, pass,email,roleId,ngo_name,mobile_no,address,year_establishment) VALUES ( null  ,'"+data.fullName+"','"+data.pass+"','"+data.email+"','"+data.roleId+"','"+data.ngo_name+"','"+data.mobile_no+"','"+data.address+"','"+data.year_establishment+"')";
console.log(sql1);
   var sql = "INSERT INTO register (personId,fullName, pass,email,roleId,ngo_name,mobile_no,address,year_establishment)  VALUES ?";
  //  res.end( response);
  var sql3 = `INSERT INTO login (username,password1) VALUES( )`
  var values =[response];
  console.log(data)
  connection.query( sql1 ,function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    res.end('register sucessfully');
  });
})
app.post('/login', function (req, res) {
    response = req.body;
    sql4 = 'SELECT * FROM register WHERE email="'+response.email+'"&& pass="'+response.Password+'"';
    console.log(sql4)
    connection.query( sql4 ,function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
        if(result.length){
            res.send(result);
        }else{
            res.status(200).send('invalid')
        }
      
      });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})