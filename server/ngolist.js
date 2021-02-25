const express = require('express');
var connection = require('./db.connection');

const  router = express.Router();

router.get('/ngo-donation',    (req, res) =>{
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

  router.get('/ngo-request',    (req, res) =>{
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

  router.get('/executor-list',    (req, res) =>{
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
  module.exports = router;