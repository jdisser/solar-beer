const fs = require ('fs'),
    filename = process.argv[2];
    
    if (!filename) {
        throw Error("File not specified");
    }
    
    fs.watch(filename, function (){
        console.log("File " + " just changed!");
    });
    
    console.log("Now watching " + filename + " for changes");
    