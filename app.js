var express = require('express');
var path = require('path');
var cors = require("cors")
var bodyParser = require('body-parser');
var session = require('express-session');
var Users = require('./routes/users')
var app = express();

const port = process.env.PORT || 4000;

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
	cookie  : { maxAge  : 120 * 1000} //2 minutes
}));


app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', Users)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})
