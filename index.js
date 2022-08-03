#!/usr/bin/node

// this is our server!!
let http = require('http');
let dt = require('./myFirstModule')

http.createServer((req, res) => {
  // inclue an http header with correct content type
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('The date and time are currently: ' + dt.myDateTime()); // write a response
  res.end(); // end the response
}).listen(8080); // server listens on port 8080

