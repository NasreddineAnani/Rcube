process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
console.log('Execution environment:' + process.env.NODE_ENV);

const express = require('express');
const app = express();
const path = require('path');
const config = require('./config/config.json');
const firebase = require('firebase');
const admin = require('firebase-admin');

var serviceAccountPath = `./config/serviceAccountKey_${process.env.NODE_ENV}.json`;
var serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config[process.env.NODE_ENV].databaseURL
});


const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

const usersController = require('./backend/controller/usersController.js');
const imagesController = require('./backend/controller/imageController.js');

// ForceSSL middleware
// app.use(forceSSL());
app.use(express.static(__dirname + '/dist'));
app.use('/', usersController);
app.use('/', imagesController);


app.listen(process.env.PORT || 8080);
console.log('Server ', process.env.PORT || 8080)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
