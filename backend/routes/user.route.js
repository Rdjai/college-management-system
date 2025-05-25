const express = require("express")

const router = express.Router();
const { registerStudent } = require("../controller/faculty/student.controller")


router.post("/api/register/students", registerStudent);


module.exports = router;