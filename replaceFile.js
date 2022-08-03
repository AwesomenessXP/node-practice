let fs = require('fs');

// when you write, you OVERWRITE the existing contents in the file!!
fs.writeFile('newfile_3.txt', 'This is my text!!', (err) => {
  if (err) throw err;
  console.log('Replaced!');
});