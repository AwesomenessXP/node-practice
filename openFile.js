let fs = require('fs');

// takes flag 'w' for writing
// REMEMBER: if file DNE, then an empty file is made
fs.open('newfile_2.txt', 'w', (err, file) => {
  if (err) throw err;
  console.log('Saved!');
});