const express=require('express');
const path = require('path');
const http = require('http').createServer();
const io = require('socket.io')(http);
const indexRouter = require('./routes/index.js');

let app=express();

//views engine setup
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

//serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);



    

// Start the server on port 3000
app.listen(3000, function (){     
    console.log('Web server running at: http://localhost:3000');     
    console.log('Press Ctrl+C to shut down the web server'); 
  });