const db = require("./models/index.js");
const express = require("express");
const app = express();
const port = 3000;

app.get("/healthcheck", async (req, res) => {
    try {
        await db.sequelize.authenticate();
        await db.sequelize.close();
        console.log("Connection has been established successfully.");
        res.status(200).send("Healthcheck Successful");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        await db.sequelize.close();
        res.status(500).send("Healthcheck Failed");
    }
});

app.listen(port, () => {
    console.log("App running on port 3000");
});
