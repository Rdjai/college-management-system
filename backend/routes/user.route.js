const express = require("express")

const router = express.router();
const { registerStudent } = require("../controller/student.controller")


router.post("student/registration", registerStudent);


module.exports = router;