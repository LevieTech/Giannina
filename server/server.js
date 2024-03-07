const express = require('express');
const nodemailer = require('nodemailer');





require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const petRouter = require('./routes/pets.router');
const patientsRouter = require('./routes/patients.router');


// Body parser middleware
app.use(express.json());


// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/pets', petRouter)
app.use('/api/patients', patientsRouter); 
// Serve static files
app.use(express.static('build'));


//!email 
app.post('/api/submit-form', async (req, res) => {
  const { name, phone, email, message } = req.body;

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: 'test.levietech123@gmail.com', //  recipient's email address
    subject: 'New Form Submission',
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});




// App Set //
const PORT = process.env.PORT || 5999;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
