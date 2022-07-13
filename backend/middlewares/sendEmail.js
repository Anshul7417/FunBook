const nodemailer = require("nodemailer");

exports.sendEmail = async (options) => {
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "ce8163395ab5d0",
          pass: "afaa6bf90a22e9"
        }
      });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transport.sendMail(mailOptions);
};