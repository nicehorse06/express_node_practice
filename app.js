const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.send('hello world')
});

app.get('/jimmy', (req, res)=>{
    res.send('hello jimmy')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});