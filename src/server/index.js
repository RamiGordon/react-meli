const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

mockResponse = [{text: "foo"}, {text: "bar"}];

app.get('/api', (req, res) => {
    res.send(mockResponse);
});

app.get('/', (req, res) => {
    res.status(200).send('What are you looking for?');
});

app.listen(port, () => {
    console.log('Express App listening on port: ' + port);
});
