const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  host: 'mail.gmail.com',
  auth: {
    user: 'onlinemeddonation@gmail.com',
    pass: 'pranali27'
  }
});


module.exports = transporter;