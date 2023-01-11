# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

# Server
## Node Environment
-Node and Express installed on the local machine. The project file ***server.js*** using express(), body-parser and cors().

-Local ***server*** running and producing feedback to the Command Line through a working callback function.

-Created Object named (projectData) initiated in the file to act as the app API endpoint.

### GET Route
a GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object.

### POST Route
add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function.

# APP API
- The personal API Key for OpenWeatherMap API is saved in a named const variable.
- The API Key variable is passed as a parameter to fetch().
- Data is successfully returned from the external API.
- event listener to an existing HTML button from DOM using Vanilla JS.
- Function to GET Project Data.