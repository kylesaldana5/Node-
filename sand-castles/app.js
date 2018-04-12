const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("models", require('./models'))
const models = app.get("models")
const {Beach, Lifeguard, Tools, Sandcastles} = app.get('models')

// middle ware routes

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = app;