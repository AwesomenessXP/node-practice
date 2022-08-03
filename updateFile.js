let fs = require('fs');

// this updates a file
fs.appendFile('newfile_1.txt', 'this is my text!!', (err) => {
  if (err) throw err;
  console.log('Updated!');
});