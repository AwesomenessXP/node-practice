let fs = require('fs');

fs.rename('newfile_1.txt', 'myRENAMEDfile.txt', (err) => {
  if (err) throw err;
  console.log('File renamed!');
});