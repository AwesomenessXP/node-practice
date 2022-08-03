let http = require('http');
let fs = require('fs');

// create the server
http.createServer((req, res) => {
  fs.readFile('demofile_1.html', (err, data) => { // read the html file
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end(); // return the content
  });
}).listen(8080);