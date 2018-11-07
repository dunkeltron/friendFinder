// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// process.env.PORT needed for heroku deployment
// =============================================================
var app = express();
var PORT = process.env.PORT || 3010;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({    extended: true}));
app.use(express.json());

//send express reference variable to routing scripts
//send path reference variable to html routing script
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app,path);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
