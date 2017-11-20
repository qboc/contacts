const express = require('express');
var bodyParser = require('body-parser');
const app = express();

const contacts = []
contacts.push({
    name: "Joe",
    phone: "234567890"
});

// parse application/json
app.use(bodyParser.json())

app.post('/contact', (req, res) => {
    contacts.push({
        "name": req.body.name,
        "phone": req.body.phone
    });
    res.send('{"status": "sucess"}');
});

app.get('/contact', (req, res) => {
    res.send(JSON.stringify(contacts));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))