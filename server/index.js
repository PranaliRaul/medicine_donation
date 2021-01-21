var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var connection = require('./db.connection')
const bycrt = require('bcrypt');
const transporter =  require('./emailservice');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser({ extended: false }))

app.use(cors())
 

app.post('/register',  async function (req, res) {
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
const haspass = await bycrt.hash(data.pass,10)
const d =Object.values(data);
console.log(d);
try{
const sql1 = "INSERT INTO register(personId,fullName, pass,email,roleId,ngo_name,mobile_no,address,year_establishment) VALUES ( null  ,'"+data.fullName+"','"+data.pass+"','"+data.email+"','"+data.roleId+"','"+data.ngo_name+"','"+data.mobile_no+"','"+data.address+"','"+data.year_establishment+"')";
  connection.query( sql1 ,function (err, result) {
    if (err) {
        res.status(500).send({err:'email id already use'});
        return;
    };
    console.log("Number of records inserted: " + result.affectedRows);
    res.send({msg:'register sucessfully'});
    sendemail(data);
  });
}catch{
    res.status(500).send({err:'email id already use'});
}
})


 function sendemail(data){
    var mailOptions = {
        from: 'onlinemeddonation@gmail.com',
        to:  data.email,
        subject: 'Registered sucessfully',
        html:   `<h1>Welcome ${data.fullName}</h1>
        <p>Register sucessfully on online donation app</p>
        <p>Here is user credential to login into app</p>
        <h3>Email: ${data.email}</h3>
        <h3>Password: ${data.pass}</h3>
        `
      };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}
app.post('/login',  function (req, res) {
    const response = req.body;
    const sql4 = 'SELECT * FROM register WHERE email="'+response.email+'"';
    connection.query( sql4 ,async function (err, result) {
        try{
        if (err) {
            res.status(500).send({err:'email id already use'});
        };
        if(result.length){ 
            if(response.Password,result[0].pass === response.Password ){
              await bycrt.compare(response.Password,result[0].pass)
                delete result[0].pass;
                res.send(result);
            }else{
                res.status(500).send({errr:'Invald paswword'});
            } 
        }else{
            res.status(500).send({errr:'Invald username '})
        }
    }catch{
        res.status(500).send({err:'email id already use'});
    }
      
      });
})
app.get('/ngolist',    (req, res) =>{
  const id = +req.query.id
  const sql4 = 'SELECT * FROM register WHERE roleId="'+id+'"';
  connection.query( sql4 ,async function (err, result) {
      try{
      if (err) {
          res.status(500).send({err:'fail to load ngo list'});
      };
      res.send(result);
      
  }catch{
      res.status(500).send({err:'Server error'});
  }
    
    });
})

app.post('/donator',  async function (req, res) {
  // Prepare output in JSON format
  response = req.body;
 
 
try{
const sql1 = "INSERT INTO donator (personId,brand_name, generic_name,ngo_name, medicine_type, exp_date,mobile_no,quantity,assign,allow_status,assign_executor) VALUES ( '"+response.personId+"' ,'"+response.brand_name+"','"+response.generic_name+"','"+response.ngo_name+"','"+response.medicine_type+"','"+response.exp_date+"','"+response.mobile_no+"','"+response.quantity+"','"+response.assign+"','"+response.allow_status+"','"+response.assign_executor+"')";
 connection.query( sql1 ,function (err, result) {
   if (err) {
       res.status(500).send({err:'donation fail'});
       return;
   };
   console.log("Number of records inserted: " + result.affectedRows);
   res.send({msg:'donation sucessfull'});
   // sendemail(data);
 });
}catch{
  res.status(500).send({err:'donation fail'});

}
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})


app.get('/mydonator',    (req, res) =>{
  const id = +req.query.id;
  const sql4 = 'SELECT * FROM donator WHERE personId="'+id+'"';
  connection.query( sql4 ,async function (err, result) {
      try{
      if (err) {
          res.status(500).send({err:'fail to load your donation'});
      };
      res.send(result);
      
  }catch{
      res.status(500).send({err:'Server error'});
  }
    
    });
})