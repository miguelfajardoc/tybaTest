const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const apiRoutes = require('./api-routes');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/auth', {useNewUrlParser: true, useUnifiedTopology: true } );
var db = mongoose.connection;

if(!db)
    console.log("Error connecting db");
else
    console.log("Db connected successfully");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieSession(
    {
    secret: "secret",
    maxAge: 24 * 60 * 60 * 1000
    }
));

let port = process.env.PORT || 5000;

app.use('/api', apiRoutes);


app.get('/', (req, res) => {
    console.log(req.session.views | 0);
    res.send('Hello World with Express');
});

app.listen(port);

console.log("server started on port: " + port);
