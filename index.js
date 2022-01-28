const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.get("/name", (req, res) => {
    let firstName = req.query.first;
    let lastName = req.query.last;

    res.json({
        "name": `${firstName} ${lastName}`
    })
})

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/view/index.html');
})

app.use('/public', express.static(__dirname + '/public'));

app.listen(8080, () => {
    console.log("Press Ctrl+C to Quit");
})