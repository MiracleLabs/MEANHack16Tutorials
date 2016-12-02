// importing the packages we need
var express=require("express");
var bodyParser=require("body-parser");

//initiating express application
var app=express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended:true})); // support encoded bodies


//route to serve index file
app.get('/',function(req,res)
{
res.sendFile(__dirname+"/index.html");
});

//route to fetch post data
app.post('/post',function(req,res)
{
var name1=req.body.name;
var password1=req.body.password;
console.log(name1);
console.log(password1);
});

//starting server on 3000
app.listen(3000,function(){
console.log("listening at 3000");
});