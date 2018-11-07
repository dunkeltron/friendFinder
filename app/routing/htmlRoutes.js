
module.exports = function(app,path){

    app.get("/survey",function(req,res){
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    
    app.get("/",function(req,res){
           //need to find what to put into the paren here
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
}