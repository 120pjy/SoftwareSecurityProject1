const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true, // secure:true for port 465, secure:false for port 587
	auth: {
	    user: 'UFStudySpotsService@gmail.com',
	    pass: 'YataYata44!'
	}
});

const emailTemplate = `
	<BODY>

		      <P align=center style="font-size:25px;color:rgb(104, 145, 162);">Study Spots</P>

		<DIV align=center>

		      <TABLE style="HEIGHT: 10px; MARGIN-LEFT: auto; WIDTH: 600px; BACKGROUND-COLOR: rgb(104, 145, 162); MARGIN-RIGHT: auto" align=center>

		            <TBODY>

		                  <TR>

		                        <TD>&nbsp;</TD>

		                  </TR>

		            </TBODY>

		      </TABLE>

		</DIV>

		<!--HEADER/BANNER END-->

		<!--CONTENT OF BODY START-->

		<DIV align=center>

		      <TABLE style="MARGIN-LEFT: auto; WIDTH: 600px; MARGIN-RIGHT: auto" cellSpacing=0 cellPadding=0 align=center>

		            <TBODY>

		                  <TR>

		                        <TD style="HEIGHT: 450px; PADDING-BOTTOM: 10px; TEXT-ALIGN: left; PADDING-TOP: 75px; PADDING-LEFT: 20px; PADDING-RIGHT: 20px; WIDTH: 600px; BACKGROUND-COLOR: #fcfcfc" vAlign=top>Hello there,<BR><BR><BR>Thank you for signing up for Study Spots! <BR><BR><BR>Please click {{VERIFY_LINK}} to verify your email. <BR><BR><BR><BR><BR><BR><BR><BR><BR>
		                        </TD>

		                  </TR>

		<TR>

		      <TD style="HEIGHT: 175px; TEXT-ALIGN: center; MARGIN-TOP: 25px; BACKGROUND-COLOR: #2a2a2a">

		            <SPAN style="COLOR: #c3c3c3"><A style="TEXT-DECORATION: none" href="www.uf-study-spots.herokuapp.com">

		            <SPAN style="COLOR: #c3c3c3"><U>www.uf-study-spots.herokuapp.com</U></SPAN></A><BR><BR>A place to find study spots at UF</SPAN>


		      </TD>

		</TR>

		<!--FOOTER END-->

		</TBODY>

		</TABLE>

		</DIV>

	</BODY>
`;

module.exports = {
	sendVerifcationEmail: function(user, callback){
		let emailContent = emailTemplate.replace("{{VERIFY_LINK}}", 
			"https://uf-study-spots.herokuapp.com/api/verify_email?token="+user.token
		);

		let mailOptions = {
			from: 'UFStudySpotsService@gmail.com',
			to: user.email,
			subject: 'Email Verification',
			html: emailContent,
		};
		transporter.sendMail(mailOptions, (err, info) => {
			if(err){
				callback(err, null);
				console.log(err);
			} else {
				console.log(err);
				callback(null, true);
				console.log(err);
			}
		});
	}
}