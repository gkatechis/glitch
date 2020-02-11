// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken'); 
const uuidv1 = require('uuid/v1');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.post('/', function (req, res) {
  
  console.log(req);
  
var uuid = uuidv1();
var payload = {
  name: 'SDK JWT new guy ',
  email: 'test@test.testing',
  phone: '6085555454',
  iat: Math.floor(Date.now() / 1000),
  jti: uuid
};

var token = jwt.sign(payload, process.env.SECRET);
  
  
  res.send(JSON.stringify({ "jwt": token}));
})

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});