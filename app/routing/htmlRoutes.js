

app.get("/survey",function(req,res){
    res.render();   //need to find what to put into the paren here
    res.sendFile(path.join(__dirname, "survey.html"));

});

app.get("/",function(req,res){
    res.render();   //need to find what to put into the paren here
    res.sendFile(path.join(__dirname, "home.html"));

});