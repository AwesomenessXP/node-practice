#!/usr/bin/node

let http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(req.url); // req.url holds the url that comes AFTER the domain name
  res.end();
}).listen(8080);