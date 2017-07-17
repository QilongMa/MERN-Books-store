const express = require('express');
const app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, function () {
    console.log('Web server running on 3000');
});