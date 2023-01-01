const express = require('express');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req,resp){
    resp.sendFile("/index.html",{root:__dirname});
});

app.listen(3000);
console.log("Connected to server 3000");