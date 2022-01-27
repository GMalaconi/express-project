const express = require("express");
const app = express();
require('dotenv').config()

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