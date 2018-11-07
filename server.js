/* possible solution to wierd routing problems 
found at 
https://stackoverflow.com/questions/6059246/how-to-include-route-handlers-in-multiple-files-in-express
*/
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");



// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3010;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({    extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app,path);
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
