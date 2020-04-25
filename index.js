const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let apiRoutes = require('./api-routes');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/auth', {useNewUrlParser: true, useUnifiedTopology: true } );
var db = mongoose.connection;

if(!db)
    console.log("Error connecting db");
else
    console.log("Db connected successfully");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 5000;

app.use('/api', apiRoutes);

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port);

console.log("server started on port: " + port);
