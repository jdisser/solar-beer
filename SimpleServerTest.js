//Simple web server test of cloud9 development

var http = require('http');
var server = http.createServer(
    function(req,res){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello from the Beagle node.js test server!\n');
    });
server.listen(5050);
console.log('BBB web server running at 192.168.1.64:5050');