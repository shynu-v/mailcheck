const router = require("express").Router();
const nodemailer = require("nodemailer");

router.get("/",(req,res)=>{
    res.render("mail");
})

router.post("/mailer",(req,res)=>{
    let mailTransporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "nodemailer96@gmail.com",
				pass: "nayanthara@96",
			},
		});

		let mailDetails = {
			from: "nodemailer96@gmail.com",
			to: req.body.email,
			subject: "Test mail by shynu",
			text: "Node.js testing mail for nodemailer",
		};

		mailTransporter.sendMail(mailDetails, function (err, data) {
			if (err) {
				res.render("msg",{"result":"Unsuccessful"});
                console.log(data);
			} else {
				res.render("msg",{"result":"Successful"});
                console.log(data);
			}
		});
})

module.exports = router;