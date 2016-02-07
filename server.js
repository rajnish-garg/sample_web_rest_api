var express = require('express'),
mongoose = require('mongoose'),
fs = require('fs');


var unirest = require('unirest');


var bodyParser = require('body-parser');

var mongoUri = 'mongodb://localhost/noderest';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

require('./models/musician');
require('./routes')(app);

app.listen(4040);
console.log('Listening on port 4040...');
