const express = require("express");
const app = express();
require('dotenv').config();

app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res, next) {
    res.json({
        "time": req.time
    })
})

app.use(function(req, res, next) {
    console.log("------------------");
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    console.log("------------------");
    next();
})

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/view/index.html');
})

app.listen(8080, () => {
    console.log("Press Ctrl+C to Quit");
})

app.use('/public', express.static(__dirname + '/public'));

msg = "its not will i am, its actually william."

if (process.env.MESSAGE_STYLE == 'uppercase') {
    msg = msg.toUpperCase();
}

app.get("/json", function(req, res) {
    res.json({
        "secret": msg
    })
})