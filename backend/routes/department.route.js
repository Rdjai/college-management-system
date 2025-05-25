const express = require("express")

const deptRoute = express.Router();
const { createDepartment } = require("../controller/admin/department.controller")

deptRoute.post("/api/deparment/create", createDepartment);

module.exports = deptRoute;