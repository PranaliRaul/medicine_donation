const express = require('express');
var connection = require('./db.connection');

const  router = express.Router();
router.post('/donator',  async function (req, res) {
    // Prepare output in JSON format
    response = req.body;
  try{
  const sql1 = "INSERT INTO donator (personId,brand_name, generic_name,ngo_name, medicine_type, exp_date,mobile_no,quantity,assign,allow_status,assign_executor,donator_name,donator_address,donation_id,donator_email,ngo_email,remaining_quantity,donation_date) VALUES ( '"+response.personId+"' ,'"+response.brand_name+"','"+response.generic_name+"','"+response.ngo_name+"','"+response.medicine_type+"','"+response.exp_date+"','"+response.mobile_no+"','"+response.quantity+"','"+response.assign+"','"+response.allow_status+"','"+response.assign_executor+"','"+response.donator_name+"','"+response.donator_address+"' , null,'"+response.donator_email+"','"+response.ngo_email+"','"+response.quantity+"' ,'"+response.donation_date+"')";
   connection.query( sql1 ,function (err, result) {
     if (err) {
         res.status(500).send({err:'donation fail'});
         return;
     };
     res.send({msg:'Donation Sucessfull !!! Thank you for donating😊'});
     // sendemail(data);
   });
  }catch{
    res.status(500).send({err:'Donation Fail... Please try again'});
  
  }
  })

  router.get('/mydonator',    (req, res) =>{
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
  

module.exports = router;
