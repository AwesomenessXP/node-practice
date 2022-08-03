let fs = require('fs');

// we want to create a new file:
fs.appendFile('newfile_1.txt', 'Hello world!!', (err) => {
  if (err) throw err;
  console.log('Saved!');
});