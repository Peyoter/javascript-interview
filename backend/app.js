const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const pe = require('parse-error');
const cors = require('cors');
const api = require('./routes/api');
const path = require('path');

mongoose.connect("mongodb+srv://root:root@cluster0-qb0pt.mongodb.net/test?retryWrites=true")
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function (err) {
    console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.use(cookieParser());
console.log((path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/public')));

//Passport
app.use(passport.initialize());

app.use(cors());

app.use('/api', api);

app.use('/', function (req, res) {
    res.statusCode = 200; //send the appropriate status code
    res.json({status: "success", message: "It's work!", data: res.body})
});

module.exports = app;

// The 'unhandledRejection' event is emitted whenever a Promise is rejected and no error handler is attached to the promise within a turn of the event loop
//https://nodejs.org/api/process.html#process_event_unhandledrejection
process.on('unhandledRejection', error => {
    console.error('Uncaught Error', pe(error));
});