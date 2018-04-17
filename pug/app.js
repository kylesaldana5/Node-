'use strict';

const express = require('express');
const app = express();
const array = require('./server.js');


app.set("view engine", "pug");

app.use(express.static(__dirname + '/img'))

app.get('/', (req, res, next ) =>{
    res.render("index")
})

app.get('/about',(req, res, next ) => {
    res.render("about")
})

app.get("/inventory", (req, res, next )=>{
    res.render("inventory", {array: array})
})

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));