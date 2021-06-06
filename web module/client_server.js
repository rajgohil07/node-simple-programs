const http = require("http");
const connect = {
    host: "localhost",
    port: 8081,
    path: "/client.html",
};

function run_client(res) {
    var data = null;
    res.on("data", function (data_getter) {
        data = data_getter;
    });
    res.on("end", () => console.log(data.toString()));
}

let run = http.request(connect, run_client);
run.end();
