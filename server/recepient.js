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

   

    router.post('/recepient-request',    (req, res) =>{
        const response = req.body;
     const sql1 = "INSERT INTO request (personId,brand_name, generic_name,ngo_name,mobile_no,quantity,assign,allow_status,assign_executor,recepient_adress,recepient_name,ngo_email,recepient_email,donation_id,excutor_email,is_deliver,request_date) VALUES ( '"+response.personId+"' ,'"+response.brand_name+"','"+response.generic_name+"','"+response.ngo_name+"','"+response.mobile_no+"','"+response.quantity+"','"+response.assign+"','"+response.allow_status+"','"+response.assign_executor+"','"+response.recepient_adress+"','"+response.recepient_name +"' ,'"+response.ngo_email+"','"+response.recepient_email+"' ,'"+response.donation_id+"','"+response.excutor_email+"','"+response.is_deliver+"','"+response.request_date+"')";
      
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
     
 module.exports = router;