const express = require('express');
require('dotenv').config();
const cors = require('cors');
const db = require("./config/db")
const route = require("./routes/user.route")
const deptRoute = require("./routes/department.route")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/student", route)
app.use("/dept", deptRoute)
app.get("/", (req, res) => {
    res.send("server started")
})

app.listen(3200, () => {
    console.log(`Server is running on http://localhost: 3200`);
})