"use strict";

const
    fs = require('fs'),
    spawn = require('child_process').spawn,
    filename = process.argv[2];
    
if (!filename) {
    throw Error("filename not specified");
}

fs.watch(filename, function(){
    let ls = spawn('ls', ['-lh', filename]),
    output = '';
    ls.stdout.on('data', function(chunk){
        output += chunk.toString();
        console.log(output + '\n');
    });
    
    ls.on('close', function(){
        let parts = output.split(/\s+/);
        console.dir([parts[0], parts[4], parts[8]]);
    });
});

console.log("now watching" + filename + " for changes...");