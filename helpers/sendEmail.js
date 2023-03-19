const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendMail = async (data) => {
  const email = { ...data, from: "igor.melnyk2011@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendMail;
