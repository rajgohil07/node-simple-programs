const express = require("express");
const app = express();

app.use(express.static('img'));

app.get("/", function (req, res) {
    res.send("from get");
});

app.get("/raj_raj", function (req, res) {
    res.send("from get raj");
});

app.get("/ab*cd", function (req, res) {
    res.send("from get dynamic page variable");
});
app.post("/", function (req, res) {
    res.send("from post");
});

app.listen(8081, function () {
    var address = this.address().address;
    var port = this.address().port
    console.log("listing at : " + address + port);
});
