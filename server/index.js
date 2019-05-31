require("dotenv").config();
const express = require("express");
const massive = require("massive");
const controller = require("./controller");
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const PORT = SERVER_PORT;


massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log("Database connected for simulation");
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));