//output_me.js

var fs = require('fs'), fileContent = 'nothing';

fs.readFile( "./file.txt" , "utf-8", function(err, file) {

    if(err) {

        console.log(err);

        return;

    }

    fileContent = file;

    console.log(fileContent +'\n');

});

console.log('ok\n');