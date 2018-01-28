// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
var connected=false;

var db;

var mongodb = require('mongodb');
// Standard URI format: mongodb://[dbuser:dbpassword@]host:port/dbname, details set in .env
var MONGODB_URI = 'mongodb://'+process.env.USER+':'+process.env.PASS+'@'+process.env.HOST+':'+process.env.DB_PORT+'/'+process.env.DB;
var ObjectId = require('mongodb').ObjectId;
const MongoClient = require('mongodb').MongoClient;

  app.listen(3000, () => {

    // http://expressjs.com/en/starter/basic-routing.html
    app.get("/", function (request, response) {
      response.sendFile(__dirname + '/views/index.html');
    });
    
  });

app.use(express.static('public'));
