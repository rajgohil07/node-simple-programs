const fs = require("fs");
const url = require("url");
const http = require("http");

//create server
http.createServer(function (req, res) {

    //to get the req filename 
    var filename = url.parse(req.url).pathname;
    console.log(filename);

    fs.readFile(filename.substr(1), function (err, data) {
        if (err) {
            console.log("error due to : " + err);
            res.writeHead(404, { 'content-type': 'text/html' });
        }
        else {
            res.writeHead(404, { 'content-type': 'text/html' });
            res.write(data);
        }
        res.end();
    });
}).listen(8081);
console.log("server running!");