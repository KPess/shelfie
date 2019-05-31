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

app.use(express.json());

app.get("/api/products/", controller.getAll);
app.post("/api/products/", controller.create);
app.get("/api/products/:id", controller.getOne);
app.put("/api/products/:id", controller.update);
app.delete("/api/products/:id", controller.delete);






app.listen(PORT, () => console.log(`Listening on port ${PORT}`));