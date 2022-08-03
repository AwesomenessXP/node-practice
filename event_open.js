let fs = require('fs');
let rs = fs.createReadStream('./newfile_2.txt');
rs.on('open', () => console.log('The file is open!!'));