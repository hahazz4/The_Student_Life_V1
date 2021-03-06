require('dotenv').config();

const http = require('http');
const express = require("express");
const app = express();
const path = require('path');
const ngrok = require('ngrok');
const mongoose = require('mongoose');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phone_number = process.env.phone_number;
const twilio_phone_number = process.env.twilio_phone_number;
const client = require('twilio')(accountSid, authToken);
const messagingResponse = require('twilio').twiml.messagingResponse;

const Reminder = require('./models/reminders');

// mongoose.connect('mongodb://localhost:27017/TheStudentLife', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("MONGO CONNECTED!");
//     })
//     .catch(err => {
//         console.log("NO MONGO CONNECTION!");
//         console.log(err);
//     })

(async function() {
    const url = await ngrok.connect(7007);
});

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));

app.get('/', (req,res) => {
    res.render('home');
});

app.get('/reminders', (req,res) => {
    res.render('reminders');
});

app.get('/howto', (req,res) => {
    res.render('howTo');
});

app.get('/support', (req,res) => {
    res.render('support');
});

// app.post('/sms', (req,res) => {
//     const twiml = new messagingResponse();

//     twiml.message("Thank you for replying to me. Have a nice day!");

//     res.writeHead(200, {'Content-Type': 'text/xml'});
//     res.end(twiml.toString());
// });

// http.createServer(app).listen(7007, () => {
//     console.log("Express server listening on port 7007");
// });

// function sendMessage() {
// client.messages
//     .create({
//         body: 'This is testing 123 man!',
//         from: twilio_phone_number,
//         to: phone_number
//     })
//   .then(message => console.log(message.sid))
//   .catch(err => console.log("An error has occured!"));
// };

app.listen(7000, (req,res) => {
    console.log("The server is up and running!");
});