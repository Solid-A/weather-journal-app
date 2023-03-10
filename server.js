// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

const port = 3000;
// Setup Server
const server = app.listen(port, () => {
  console.log(`running on localhost: ${port}`);
})

// TODO-ROUTES!
// POST route
app.post('/add', callBack);

function callBack(req, res){
  projectData = req.body;
  res.send(projectData);
  console.log(projectData);
}

// GET route
app.get('/all', getData);

function getData(req, res){
  res.send(projectData);
}