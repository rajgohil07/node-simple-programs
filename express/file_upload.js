const fs = require("fs");
const ex = require("express");
const app = ex();
const BP = require("body-parser");
const multer = require("multer");
const target_folder = __dirname + 'uploaded_dir';

app.use(BP.urlencoded({ extended: false }));
app.use(multer({ dest: [target_folder] }).any());

app.get('/file_upload.html', function (req, res) {
    res.sendFile(__dirname + '/file_upload.html');
});

app.post('/file_upload', function (req, res) {
    console.log(req.files.file.name);
    console.log(req.files.file.path);
    console.log(req.files.file.type);

    var file_name = __dirname + "/" + req.files.file.name;
    fs.readFile(req.files.file.path, function (er, result) {
        fs.writeFile(file_name, result, function (er) {

            if
                (er) console.log(er);
            else {
                let img_res = { result: 'true', filename: req.files.file.name };
                console.log(img_res);
                res.end(JSON.stringify(img_res));
            }
        })
    });
});

app.listen(8081, function () {
    console.log("listing at port no : 8081" + __dirname);
});
