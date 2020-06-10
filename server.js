var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

// when socket.io receives a connection should return it's broadcast
io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg)
    })
})

// starts the server
http.listen(3000, function() {
    console.log('Server started at http://localhost:3000')
})