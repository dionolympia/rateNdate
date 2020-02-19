const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Use local files
var path= require('path');

// Set port for server
var port = 3000;

// Configure Middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder

const {homepage} = require("./app/routes/index.js");

app.get('/', homepage);
app.get('', homepage);
app.get('/home',homepage);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
