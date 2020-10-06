
const indexRouter = require('./routes/index.js');
const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);

//socket.io connection
io.on('connection', function (socket){
  console.log('user connected');

  //socket.io disconnection
  socket.on('disconnect', function() {
  console.log('user disconnected');
});

});



//views engine setup
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

//serving static files
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);



    

// Start the server on port 3000
http.listen(3000, function (){     
    console.log('Web server running at: http://localhost:3000');     
    console.log('Press Ctrl+C to shut down the web server'); 
  });