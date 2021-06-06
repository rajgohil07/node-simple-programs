const fs = require("fs");

fs.readFile("text_input.txt", function (err, result) {
  err ? console.log("error cause of:" + err) : "";
  console.log("data from input file :" + result);
  console.log("\nprogram eneded! inside callback function!");
});
console.log("program eneded! after function!\n");
