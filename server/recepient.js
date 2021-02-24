const express = require('express');
var connection = require('./db.connection');

const  router = express.Router();
router.post('/recepient',  async function (req, res) {
   
    response = req.body;

    try{
        const sql1 = "INSERT INTO request (personId,brand_name, generic_name,ngo_name,mobile_no,quantity,assign,allow_status,assign_executor,recepient_adress,recepient_name,ngo_email,recepient_email,request_date) VALUES ( '"+response.personId+"' ,'"+response.brand_name+"','"+response.generic_name+"','"+response.ngo_name+"','"+response.mobile_no+"','"+response.quantity+"','"+response.assign+"','"+response.allow_status+"','"+response.assign_executor+"','"+response.recepient_adress+"','"+response.name +"' ,'"+response.ngo_email+"','"+response.recepient_email+"' ,'"+response.request_date+"')";
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


        router.get('/myrequest',   (req, res)=> {
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


 module.exports = router;