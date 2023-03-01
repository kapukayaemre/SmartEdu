const nodemailer = require("nodemailer");

exports.getIndexPage = (req, res) => {
  res.status(200).render('index', {
    page_name: 'index',
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};

exports.getRegisterPage = (req, res) => {
  res.status(200).render('register', {
    page_name: 'register',
  });
};

exports.getLoginPage = (req, res) => {
  res.status(200).render('login', {
    page_name: 'login',
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};

exports.sendEmail = async (req, res) => {
  
  const outputMessage = `
  
  <h1> Mail Details </h1>
  <ul>
    <li>Name: ${req.body.name} </li>
    <li>Email: ${req.body.email} </li>
  </ul>
  <h1> Message </h1>
  <p> ${req.body.message} </p>
  `

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "yourmail@mail.com", // gmail account
      pass: "yourpassword", // gmail password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"SmartEdu Contact Form 👻" <yourmail@mail.com>', // sender address
    to: "receiver@hotmail.com", // list of receivers
    subject: "SmartEdu Contact Form New Message ✔", // Subject line
    // text: "Hello world?", // plain text body
    html: outputMessage // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  res.status(200).redirect('contact');

};