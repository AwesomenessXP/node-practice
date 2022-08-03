let http = require('http');
let url = require('url');

// we can split the query string into readable parts
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  let q = url.parse(req.url, true).query;
  let txt = q.year + ' ' + q.month;
  res.end(txt);
}).listen(8080)