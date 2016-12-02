var express = require('express');
var app=express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/chat', function(req, res){
  res.sendFile(__dirname + '/chatui.html');
});


io.on('connection', function(socket) {

    socket.on('chat message', function(msg){
		var jsonData={
				"username":msg.username,
				"message":msg.message
		};
      io.emit('message',jsonData);
    });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
