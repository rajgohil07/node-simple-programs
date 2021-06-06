const fs = require("fs");

fs.readdir("../", (err, data) => {
    err ? console.log("error accured due to:" + err) : "";
    console.log("the files for desired dir is !\n");

    //to get data in sequence
    for (let x in data) {
        console.log(x + ":" + data[x]);
    }
});
