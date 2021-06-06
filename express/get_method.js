const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('at correct location!');
});

app.get('/index.html', function (req, res) {
    // res.send('at correct location!');
    res.sendFile(__dirname + "/" + 'index.html');
});

app.get('/process_get', function (req, res) {
    data = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(data);
    res.end(JSON.stringify(data));
})

app.listen(8081, function () {
    console.log("server runiing at " + this.address().port)
})