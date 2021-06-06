//from module
const fs = require("fs");
var buf = Buffer.alloc(1024);

fs.open("open_edit_file.txt", "r+", function (err, id) {
    err ? console.log("error accured due to:" + err) : "";
    console.log("invoked! the open function");

    //read file
    fs.read(id, buf, 0, buf.length, 0, function (err, byte) {
        console.log("invoked! the read function");
        err ? console.log("error accured due to:" + err) : "";
        byte > 0 ? console.log(buf.slice(0, byte).toString()) : "";
        console.log("going to check file info");
    });

    // to check file info
    fs.stat("open_edit_file.txt", function (err, info) {
        err ? console.log("error accured due to:" + err) : "";

        //info getter
        console.log(`fileinfo : `);
        console.log(info);
        console.log("filecheck: " + info.isFile());
    });

    //closing
    fs.close(id, function (err) {
        err ? console.log("error accured due to:" + err) : "";
        console.log("file closed due to close function");
    });
});
