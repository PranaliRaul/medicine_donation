
const express = require('express');
var connection = require('./db.connection');

const  router = express.Router();




router.get('/assign-donation',    (req, res) =>{
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

  router.get('/assign-request',    (req, res) =>{
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
  router.post('/executor-inactive',    (req, res) =>{
  response = req.body;

    const sql = 'SELECT * FROM request WHERE excutor_email="'+response.email+'" and is_deliver=0 ';
    const sql2 = 'SELECT * FROM donator WHERE excutor_email="'+response.email+'" and is_collected=0 ';
    const sql3 = "UPDATE register SET active_acc= 0  WHERE personId= '"+response.personId+"' "

    connection.query( sql ,async function (err, result1) {
        try{
        if(result1.length){
            res.status(200).send({msg:'Cannot deactive this account cause it has assigned requests '});
            return;
        }
        connection.query( sql2 ,async function (err, result2) {
            if(result2.length){
                res.status(200).send({msg:'Cannot deactive this account cause it has assigned donations '});
                return;
            }
            connection.query( sql3 ,async function (err, result3) {
                        if(err){
                            res.status(500).send({msg:'failed'}); 
                        }
                    res.status(200).send({msg:'Executor Deactivated Successfully'});
                    
            })
        })
       
    }catch{
        res.status(500).send({err:'Server error'});
    }
  
      });
  })

module.exports = router;