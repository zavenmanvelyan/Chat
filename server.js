var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var ellipses = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});


io.on('connection', function (socket) {
    socket.on("drawed ellipse", function (data) {
        io.sockets.emit("display ellipse", data);
    });
 });


server.listen(3000);