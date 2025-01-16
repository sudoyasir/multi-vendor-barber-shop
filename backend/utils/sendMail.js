const nodemailer = require("nodemailer");

const sendMail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        service: "gmail",
        auth:{
            user: "y451rmahar@gmail.com",
            pass: "hlwnvqqbeaeiwqcy",
        },
    });

    const mailOptions = {
        from: "y451rmahar@gmail.com",
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendMail;