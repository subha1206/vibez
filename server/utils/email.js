const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: 'Yahoo',
    secure: true,
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailGenerator = new Mailgen({
    theme: 'salted',
    product: {
      // Appears in header & footer of e-mails
      name: 'Chat&Build',
      link: 'https://mailgen.js/',
      // Optional product logo
      // logo: 'https://mailgen.js/img/logo.png'
    },
  });

  let response = {};

  if (options.type === 'Welcome') {
    response = {
      body: {
        name: options.userName,
        intro: "Welcome to Mailgen! We're very excited to have you on board.",
        outro:
          "Need help, or have questions? Just reply to this email, we'd love to help.",
      },
    };
  }
  if (options.type === 'Password-reset') {
    response = {
      body: {
        name: options.userName,
        intro: 'Click the button bellow to reset password, as you requested',
        action: {
          instructions:
            'To get started with the password reset process, please click here:',
          button: {
            color: '#22BC66', // Optional action button color
            text: 'Reset password',
            link: options.resetLink,
          },
        },
        outro:
          "Need help, or have questions? Just reply to this email, we'd love to help.",
      },
    };
  }
  const mail = mailGenerator.generate(response);

  const mailOption = {
    from: 'Subha Sarkar <hello@email.com>',
    to: options.email,
    subject: options.subject,
    html: mail,
  };

  await transporter.sendMail(mailOption);
};

module.exports = sendEmail;
