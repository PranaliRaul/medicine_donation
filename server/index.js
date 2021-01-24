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
    year_establishment: +response.year_establishment,
    ngo_executor:response.ngo_executor,
    active_acc:response.active_acc ? 1:0

}
//const haspass = await bycrt.hash(data.pass,10)
//const d =Object.values(data);
// console.log(d);
try{
const sql1 = "INSERT INTO register(personId,fullName, pass,email,roleId,ngo_name,mobile_no,address,year_establishment,ngo_executor,active_acc) VALUES ( null  ,'"+data.fullName+"','"+data.pass+"','"+data.email+"','"+data.roleId+"','"+data.ngo_name+"','"+data.mobile_no+"','"+data.address+"','"+data.year_establishment+"','"+data.ngo_executor+"','"+data.active_acc+"')";
  connection.query( sql1 ,function (err, result) {
    if (err) {
        res.status(500).send({err:'email id already use'});
        return;
    };
    console.log("Number of records inserted: " + result.affectedRows);
    if(data.active_acc){
    res.send({msg:'register sucessfully'});
    }else{
    res.send({msg:'your request has been recorded will notify with an e-mail'});

    }
    if(data.active_acc){
      sendemail(data);
    }

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
        html:   `<h1>Welcome ${data.fullName ? data.fullName:data.ngo_name}</h1>
        <p>Registered sucessfully on online donation app</p>
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
    const sql4 = 'SELECT * FROM register WHERE email="'+response.email+'" && active_acc=1';
    connection.query( sql4 ,async function (err, result) {
        try{
        if (err) {
            res.status(500).send({err:'login fail'});
        };
        if(result.length){ 
            if(response.Password,result[0].pass === response.Password  ){
              // await bycrt.compare(response.Password,result[0].pass)
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
  const sql4 = 'SELECT * FROM register WHERE roleId="'+id+'" && active_acc="'+1+'"';
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
const sql1 = "INSERT INTO donator (personId,brand_name, generic_name,ngo_name, medicine_type, exp_date,mobile_no,quantity,assign,allow_status,assign_executor,donator_name,donator_address,donation_id) VALUES ( '"+response.personId+"' ,'"+response.brand_name+"','"+response.generic_name+"','"+response.ngo_name+"','"+response.medicine_type+"','"+response.exp_date+"','"+response.mobile_no+"','"+response.quantity+"','"+response.assign+"','"+response.allow_status+"','"+response.assign_executor+"','"+response.donator_name+"','"+response.donator_address+"' , null)";
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

app.post('/recepient',  async function (req, res) {
  // Prepare output in JSON format
  response = req.body;
 
 
try{
const sql1 = "INSERT INTO request (personId,brand_name, generic_name,ngo_name,mobile_no,quantity,assign,allow_status,assign_executor,recepient_adress,recepient_name) VALUES ( '"+response.personId+"' ,'"+response.brand_name+"','"+response.generic_name+"','"+response.ngo_name+"','"+response.mobile_no+"','"+response.quantity+"','"+response.assign+"','"+response.allow_status+"','"+response.assign_executor+"','"+response.recepient_adress+"','"+response.name
+"')";
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


app.get('/myrequest',    (req, res) =>{
  const id = +req.query.id
  const sql4 = 'SELECT * FROM request WHERE personId="'+id+'"';
  connection.query( sql4 ,async function (err, result) {
      try{
      if (err) {
          res.status(500).send({err:'fail to load your medicine request'});
      };
      res.send(result);
      
  }catch{
      res.status(500).send({err:'Server error'});
  }
    
    });
})

app.get('/ngo-request',    (req, res) =>{
  const name = req.query.name
  const sql4 = 'SELECT * FROM request WHERE ngo_name="'+name+'"';
  connection.query( sql4 ,async function (err, result) {
      try{
      if (err) {
          res.status(500).send({err:'fail to load your medicine request'});
      };
      res.send(result);
      
  }catch{
      res.status(500).send({err:'Server error'});
  }
    
    });
})
app.get('/ngo-donation',    (req, res) =>{
  const id = req.query.id
  const sql4 = 'SELECT * FROM  donator WHERE ngo_name="'+id+'"';
  connection.query( sql4 ,async function (err, result) {
      try{
      if (err) {
          res.status(500).send({err:'fail to load your medicine request'});
      };
      res.send(result);
      
  }catch{
      res.status(500).send({err:'Server error'});
  }
    
    });
})

app.post('/upload',  function (req, res) {
  const response = req.body;
  const sql1 = "INSERT INTO ngo_certificate (email,certificate,ngo_name) VALUES ( '"+response.email+"' ,'"+response.certificate+"','"+response.ngo_name+"')";
  connection.query( sql4 ,async function (err, result) { 
      if (err) {
          res.status(500).send({err:'login fail'});
      };
    })
})

app.post('/update-ngo',  async function (req, res) {
  // Prepare output in JSON format
  response = req.body;
  response.status = 1
//const haspass = await bycrt.hash(data.pass,10)
//const d =Object.values(data);
// console.log(d);
try{
const sql1 = "UPDATE register SET active_acc= '"+response.status+"'  WHERE email= '"+response.email+"' ";
 connection.query( sql1 ,function (err, result) {
   if (err) {
       res.status(500).send({err:'email id already use'});
       return;
   };
   res.send({msg:'register sucessfully'});
     sendemail(req.body);
 });
}catch{
   res.status(500).send({err:'Internal server error'});
}
})
app.get('/ngo-requestactivate',    (req, res) =>{
  const id = +req.query.id
  const status = 0;
  const sql4 = 'SELECT * FROM register WHERE roleId="'+id+'" && active_acc="'+status+'" ';
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

app.get('/executor-list',    (req, res) =>{
  const id =  req.query.id
  const sql4 = 'SELECT * FROM register WHERE ngo_executor="'+id+'" ';
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
app.post('/assign-executor',    (req, res) =>{
  const sql4 = 'UPDATE donator SET excutor_email = "'+req.body.excutor_email+'" , assign_executor="'+req.body.assign_executor+'" WHERE donation_id="'+req.body.donation_id+'" ';
  connection.query( sql4 ,  function (err, result) {
      try{
      if (err) {
          res.status(500).send({err:'fail to load ngo list'});
      };
      res.send({msg:'executor assigned sucessfully'});
      
  }catch{
      res.status(500).send({err:'Server error'});
  }
    
    });
})


app.get('/assign-donation',    (req, res) =>{
  const id =  req.query.id
  const sql4 = 'SELECT * FROM donator WHERE excutor_email="'+id+'" ';
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