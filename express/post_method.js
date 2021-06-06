const express = require("express");
const BP = require("body-parser");
const filename = "/index_post.html";
const app = express();

const bodyParser = BP.urlencoded({ extended: false });
// app.use(BP.urlencoded({extended:false}));
app.get(filename, function (req, res) {
    res.sendFile(__dirname + filename);
});

app.post("/post_method", bodyParser, function (req, res) {
    data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
    };
    // console.log(data);
    for (let x in data) {

        console.log(x + ":" + data[x]);
        var data_info = data_info + data[x];
    }
    res.end(data_info);

});

app.listen(8081, function () {
    console.log("server has started at port NO: " + this.address().port);
});
