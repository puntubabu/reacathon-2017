const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let app = express();

// middleware ==================================================================
app.use(require('morgan')('dev')); // log every request to the console
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // get information from html forms
app.use(require('connect-flash')()); // use connect-flash for flash messages stored in session

// launch ===========================================================
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
} else {
  app.use(express.static('client/public'));
}

app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), () => {
  console.log(`SimplAFi server listening at http://localhost:${app.get('port')}/`);
});