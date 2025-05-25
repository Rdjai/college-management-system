const express = require("express");
const adminRoute = express.Router();
const { createFaculty } = require('../controller/admin/faculty.controller')
const { createDepartment } = require('../controller/admin/department.controller')

adminRoute.post("/api/addfaculty", createFaculty);
adminRoute.post("/api/adddepart", createDepartment);


module.exports = adminRoute;
