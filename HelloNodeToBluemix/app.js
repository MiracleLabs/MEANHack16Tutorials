var express = require('express'); //requiring express library
var app = express();
var port = process.env.PORT || 3000; 
var host = process.env.HOST || 'localhost' ;

//creating a route to serve html file
app.get("/htmlpage",function(req,res){
 res.sendFile(__dirname + "/public/" + "index.html");
});

//creating server 
app.listen(port, function(){
 console.log("Server was started on Bluemix with your app @ /htmlpage");
 console.log("Your App is running at "+host+":"+port);
});




