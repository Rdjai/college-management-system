const express = require('express');
require('dotenv').config();
const cors = require('cors');
const db = require("./config/db")

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("server started")
})

app.listen(3200, () => {
    console.log(`Server is running on http://localhost: 3200`);
})