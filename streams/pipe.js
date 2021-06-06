var fs = require("fs");
var RS = fs.createReadStream('input.txt');
var WS = fs.createWriteStream('output.txt');

// Pipe operation
RS.pipe(WS);

console.log("program invoked!");