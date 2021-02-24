const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./db.connection');
const bycrt = require('bcrypt');
const transporter =  require('./emailservice');
const donator = require('./donator');
const recepient = require('./recepient');
const urlencodedParser = bodyParser.urlencoded({ extended: false ,limit: '50mb'})
app.use(bodyParser.json());
// app.use(app.bodyParser({limit: '6mb'}))
// app.use(bodyParser({ extended: false }))

app.use(cors())
app.use(donator);
app.use(recepient);
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
    if(data.active_acc){
    res.send({msg:'register sucessfully'});
    }else{
    res.send({msg:'your request has been recorded will notify with an e-mail'});

    }
    if(data.active_acc){
      const subject =  'Registered sucessfully';
      const html1 =    `<h1>Welcome ${data.fullName ? data.fullName:data.ngo_name}</h1>
      <p>Registered sucessfully on online donation app</p>
      <p>Here is user credential to login into app</p>
      <h3>Email: ${data.email}</h3>
      <h3>Password: ${data.pass}</h3>`
      sendemail(data.email,subject,html1 );
    }

  });
}catch{
    res.status(500).send({err:'email id already use'});
}
})


 function sendemail(email,sub,html){
    var mailOptions = {
        from: 'onlinemeddonation@gmail.com',
        to:  email,
        subject:  sub,
        html:   html
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
    const sql4 = 'SELECT * FROM register WHERE email="'+response.email+'" ';
    connection.query( sql4 ,async function (err, result) {
        try{
        if (err) {
            res.status(500).send({err:'Login Failed'});
        };
         
        if(result.length && result[0].active_acc==1){
            if(response.Password,result[0].pass === response.Password  ){
              // await bycrt.compare(response.Password,result[0].pass)
                delete result[0].pass;
                res.send(result);
            }else{
                res.status(500).send({errr:'Invalid Paswword'});
            }
        }else{
          if(result.length){
            res.status(500).send({errr:'Your account has been blocked by admin'})
          }else{
            res.status(500).send({errr:'Invalid username '})
          }
          
        }
    }catch{
        res.status(500).send({err:'Email id already use'});
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

 
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})



// app.post('/recepient',  async function (req, res) {
//   // Prepare output in JSON format
//   response = req.body;
// try{
// const sql1 = "INSERT INTO request (personId,brand_name, generic_name,ngo_name,mobile_no,quantity,assign,allow_status,assign_executor,recepient_adress,recepient_name,ngo_email,recepient_email) VALUES ( '"+response.personId+"' ,'"+response.brand_name+"','"+response.generic_name+"','"+response.ngo_name+"','"+response.mobile_no+"','"+response.quantity+"','"+response.assign+"','"+response.allow_status+"','"+response.assign_executor+"','"+response.recepient_adress+"','"+response.name +"' ,'"+response.ngo_email+"','"+response.recepient_email+"' )";
//  connection.query( sql1 ,function (err, result) {
//    if (err) {
//        res.status(500).send({err:'donation fail'});
//        return;
//    };
//    console.log("Number of records inserted: " + result.affectedRows);
//    res.send({msg:'donation sucessfull'});
//    // sendemail(data);
//  });
// }catch{
//   res.status(500).send({err:'donation fail'});

// }
// })


// app.get('/myrequest',    (req, res) =>{
//   const id = +req.query.id
//   const sql4 = 'SELECT * FROM request WHERE personId="'+id+'"';
//   connection.query( sql4 ,async function (err, result) {
//       try{
//       if (err) {
//           res.status(500).send({err:'fail to load your medicine request'});
//       };
//       res.send(result);

//   }catch{
//       res.status(500).send({err:'Server error'});
//   }

//     });
// })

app.get('/ngo-request',    (req, res) =>{
  const name = req.query.name
  const sql4 = 'SELECT * FROM request WHERE ngo_email="'+name+'"';
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
  const sql4 = 'SELECT * FROM  donator WHERE ngo_email="'+id+'"';
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

app.post('/upload', urlencodedParser, function (req, res) {
  const response = req.body;
  const sql1 = "INSERT INTO ngo_certificate (email,certificate,ngo_name) VALUES (  narendra ,'"+response+"','"+response.ngo_name+"')";
  connection.query( sql1 ,async function (err, result) {
      if (err) {
          res.status(500).send({err:'uploade fail'});
      };
    })
})

app.post('/update-ngo',  async function (req, res) {
  // Prepare output in JSON format
  response = req.body;
  response.status = response.active_acc ? 1:0;
//const haspass = await bycrt.hash(data.pass,10)
//const d =Object.values(data);
// console.log(d);
try{
const sql1 = "UPDATE register SET active_acc= '"+response.status+"'  WHERE email= '"+response.email+"' ";
const sql2 = "UPDATE register SET active_acc= '"+response.status+"'  WHERE ngo_executor= '"+response.email+"' "
 connection.query( sql1 ,function (err, result) {
   if (err) {
       res.status(500).send({err:'email id already use'});
       return;
   };

   res.send({msg:'Updated sucessfully'});
   connection.query( sql2 ,function (err, result) {
    if (err) {

  };
   })
   let subject
   let html2
   if(response.active_acc ){
     subject =  'Updated sucessfully';
     html2 =    `<h1>Welcome ${response.fullName ? response.fullName:response.ngo_name}</h1>
                    <p>Registered sucessfully on online donation app</p>
                    <p>Here is user credential to login into app</p>
                    <h3>Email: ${response.email}</h3>
                    <h3>Password: ${response.pass}</h3>`
   }else{
    subject =  'Online Donation account has been deactivated';
    html2 =    `<h1>Hi ${response.fullName ? response.fullName:response.ngo_name}</h1>
                   <p>Your Account has been  deactivated by admin</p>
                   <p>Please conatct Admin for further details</p>`
   }
     sendemail(response.email,subject,html2);
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
  const is_collected = req.body.is_collected ? 1:0;
  const sql4 = 'UPDATE donator SET excutor_email = "'+req.body.excutor_email+'" , assign_executor="'+req.body.assign_executor+'" , is_collected="'+is_collected+'" WHERE donation_id="'+req.body.donation_id+'" ';
  connection.query( sql4 ,  function (err, result) {
      try{
      if (err) {
          res.status(500).send({err:'fail to load ngo list'});
      };
      res.send({msg:'executor assigned sucessfully'});
      if(req.body.is_collected ){

       const text =  `<h4>Hi ${ req.body.donator_name }</h4>
                    <p>Greeting from ${req.body.ngo_name}, Your medicine donation has been sucessfully collected from our executor ${req.body.assign_executor}</p>
                    <p>Thanks & Regards</p>
                    <p>Email: ${req.body.ngo_email}</p>`
        sendemail(req.body.donator_email,'Medicine donation',text)
      }

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

app.post('/assign-executor-request',    (req, res) =>{
  console.log(req.body)
  const sql4 = 'UPDATE request SET excutor_email = "'+req.body.excutor_email+'" , assign_executor="'+req.body.assign_executor+'" , is_deliver="'+req.body.is_deliver+'", assign="'+req.body.assign+'", donation_id="'+req.body.donation_id+'",allow_status="'+req.body.allow_status+'" WHERE request_id="'+req.body.request_id+'" ';
  const sql5 = 'UPDATE donator SET remaining_quantity = "'+req.body.remaining_quantity+'" , assign="'+req.body.recepient_name+'" , request_id="'+req.body.request_id+'" WHERE donation_id="'+req.body.donation_id+'" ';

  connection.query( sql4 ,  function (err, result) {
      try{
      if (err) {
          res.status(500).send({err:'fail to load ngo list'});
      };
      res.send({msg:'executor assigned sucessfully'});
      connection.query( sql5 ,  function (err, result) {
        if (err) {

      };
      })
      if(req.body.is_deliver ){
       const text =  `<h4>Hi ${ req.body.recepient_name }</h4>
                    <p>Greeting from ${req.body.ngo_name}, Your requested medicine has been sucessfully delivered by our executor ${req.body.assign_executor}</p>
                    <p>Thanks & Regards</p>
                    <p>Email: ${req.body.ngo_email}</p>`
        sendemail(req.body.recepient_email,'Medicine donation',text)
      }

  }catch{
      res.status(500).send({err:'Server error'});
  }

    });
})

app.get('/assign-request',    (req, res) =>{
  const id =  req.query.id
  const sql4 = 'SELECT * FROM request WHERE excutor_email="'+id+'" ';
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



app.post('/recepient-request',    (req, res) =>{
   const response = req.body;
const sql1 = "INSERT INTO request (personId,brand_name, generic_name,ngo_name,mobile_no,quantity,assign,allow_status,assign_executor,recepient_adress,recepient_name,ngo_email,recepient_email,donation_id,excutor_email,is_deliver) VALUES ( '"+response.personId+"' ,'"+response.brand_name+"','"+response.generic_name+"','"+response.ngo_name+"','"+response.mobile_no+"','"+response.quantity+"','"+response.assign+"','"+response.allow_status+"','"+response.assign_executor+"','"+response.recepient_adress+"','"+response.recepient_name +"' ,'"+response.ngo_email+"','"+response.recepient_email+"' ,'"+response.donation_id+"','"+response.excutor_email+"','"+response.is_deliver+"')";
 
  const sql3 =  `SELECT  * FROM request ORDER BY request_id DESC LIMIT 1`
  connection.query( sql1 ,  function (err, result) {
      try{
      if (err) {
          res.status(500).send({err:'fail to load ngo list'});
      };
      connection.query( sql3 ,  function (err, sql3result) {
        if (err) {

        }
  const sql2 = 'UPDATE donator SET remaining_quantity = "'+response.remaining_quantity+'" , assign="'+response.recepient_name+'" , request_id="'+sql3result[0].request_id+'" WHERE donation_id="'+req.body.donation_id+'" ';

      connection.query( sql2 ,  function (err, result) {
        if (err) {
        }
    })
  
      res.send({msg:'executor assigned sucessfully'});
      })
      // if(req.body.is_deliver ){
      //  const text =  `<h4>Hi ${ req.body.recepient_name }</h4>
      //               <p>Greeting from ${req.body.ngo_name}, Your requested medicine has been sucessfully delivered by our executor ${req.body.assign_executor}</p>
      //               <p>Thanks & Regards</p>
      //               <p>Email: ${req.body.ngo_email}</p>`
      //   sendemail(req.body.recepient_email,'Medicine donation',text)
      // }

  }catch{
      res.status(500).send({err:'Server error'});
  }

    });
})


app.post('/forgot-password',    (req, res) =>{
  const body = req.body;
  const sql = 'UPDATE register SET  pass="'+body.password + '" WHERE  email= "'+body.email+'" and active_acc=1';

  connection.query( sql ,  function (err, result) {
      try{
      if (err) {
          res.status(500).send({err:'fail to load ngo list'});
      };
      if(result.affectedRows){
      res.send({msg:'Password changed successfully '});
      }else{
      res.status(500).send({msg:'Email Id does not exists'});

      }
      
      //  const text =  `<h4>Hi ${ req.body. }</h4>
      //               <p>Greeting from ${req.body.ngo_name}, Your requested medicine has been sucessfully delivered by our executor ${req.body.assign_executor}</p>
      //               <p>Thanks & Regards</p>
      //               <p>Email: ${req.body.ngo_email}</p>`
      //   sendemail(req.body.recepient_email,'Medicine donation',text);   

  }catch{
      res.status(500).send({err:'Server error'});
  }

    });
})

