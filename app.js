var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vinayakrr67@gmail.com',
      pass: 'plqh vpdr akpd vobt'
    }
  });
  
  var mailOptions = {
    from: 'vinayakrr67@gmail.com',
    to: 'anjanavu2000@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });