const departmentSchema = require("../../models/Academic_Structure/department.model")

const createDepartment = async (req, res) => {
    try {
        const { name, code, HoD, desc, establishYear, contactEmail, contactPhone } = req.body;
        const existDept = await departmentSchema.findOne({
            Name: name
        })
        if (existDept) return res.status(201).json({
            "err": "department Name already exist"
        })
        const createdDept = new departmentSchema({
            Name: name,
            code: code,
            headOfDepartment: HoD,
            description: desc,
            establishedYear: establishYear,
            contactEmail: contactEmail,
            contactPhone: contactPhone
        })
        await createdDept.save();
        res.status(201).json({ message: 'deparment created successfully', department: createdDept })

    } catch (error) {
        console.error('Error in student registration:', error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
}

module.exports = {
    createDepartment
}