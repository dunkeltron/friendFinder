// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3010;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());



app.get("/survey",function(req,res){
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
    console.log("survey");
});

app.get("/",function(req,res){
       //need to find what to put into the paren here
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
    console.log("home");
});
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
