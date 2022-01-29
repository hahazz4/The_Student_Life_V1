const express = require("express");
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req,res) => {
    res.send("Welcome, testing...");
});

app.listen(7000, (req,res) => {
    console.log("The server is up and running!");
});