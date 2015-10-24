var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res){
 res.sendFile(__dirname + '/index.html');
});

app.use("/", express.static(__dirname + '/'));

app.listen(port);

console.log("Running on http://localhost:"+port);