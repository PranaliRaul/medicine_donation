
const express = require('express');
const connection = require('./db.connection');

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
 

module.exports = router;