const fs = require('fs');

fs.writeFile('target.txt', 'written by simple-write',
    function(err) {
        if (err) {
            throw err;
        }        
    
    console.log('file saved!');
        
});