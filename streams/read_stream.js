//import
const fs = require("fs");
const RS = fs.createReadStream("read_stream_input.txt");

//define null
var file_data_getter = null;

console.log(
  "value of variable before stream function: " + file_data_getter + "\n"
);

function data_fetcher(result) {
  file_data_getter = result;
  console.log("value of variable after stream function: \n" + file_data_getter);
}

//to get data
RS.on("data", data_fetcher);

//it will call when there is no data to read
RS.on("end", () => console.log("program terminated!"));

RS.on("error", (err) => console.log("error accured: " + err));
