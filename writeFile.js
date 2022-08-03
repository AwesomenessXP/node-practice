let fs = require('fs');

fs.writeFile('newfile_3.txt', 'Hello world!!', (err) => {
  if (err) throw err;
  console.log('Saved!');
})