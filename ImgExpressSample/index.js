const express = require('express');
const app = express();

app.post('/index', (req, res) => {
    res.send('hello');
})

app.get('/index', (req, res) => {
    res.send('hello');
})

app.listen(8080,() => {
    console.log('ポート8080で待機中');
})