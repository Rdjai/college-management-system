const studentSchema = require("../models/User_Management/student.model")
const departmentSchema = require("../models/Academic_Structure/department.model")

async function generateRollNumber(departmentId) {
    const department = await departmentSchema.findById(departmentId);
    if (!department || department.code) throw new Error("Invalid deparment ID");
    const deparmentcode = department.code.toUpperCase();


    const findLastSudent = await studentSchema.find({
        department: departmentId,
        enrollmentNumber: { $regex: `^${deptCode}` }
    }).sort({ enrollmentNumber: -1 }).limit(1)
    let nextNumber = '000001';

    if (findLastSudent.length > 0) {
        const lastEnroll = findLastSudent[0].enrollmentNumber;
        const lastNum = parseInt(lastEnroll.slice(deparmentcode.length)) || 0;
        nextNumber = string(lastNum + 1).padStart(6, '0');
    }
    return `${deptCode}${nextNumber}`;
}
exports.registerStudent = async (req, res) => {

    try {
        const {
            name,
            enrollmentNumber,
            gender,
            dateOfBirth,
            email,
            phone,
            address,
            department,
            semester,
            course,
            admissionDate,
            profileImageUrl,
            documents,
            marks,
            attendance
        } = req.body;

        if (!name || !enrollmentNumber || !gender || !dateOfBirth || !email || !phone || !department || !semester || !course) {
            return res.status(400).json({ message: 'Please fill all required fields.' });
        }


        const existingStudent = await studentSchema.findOne({
            $or: [{ enrollmentNumber }, { email }]
        })
        if (existingStudent) {
            return res.status(409).json({ message: 'Enrollment Number or Email already registered.' });
        }
        const NewenrollmentNumber = await generateRollNumber(department)

        const newStudent = new studentSchema({
            name,
            enrollmentNumber,
            rollNumber,
            gender,
            dateOfBirth,
            email,
            phone,
            address,
            department,
            semester,
            course,
            admissionDate: admissionDate || Date.now(),
            profileImageUrl,
            documents: documents || [],
            marks: marks || [],
            attendance: attendance || []
        })
        await newStudent.save();
        res.status(201).json({ message: 'Student registered successfully', student: newStudent });

    } catch (error) {
        console.error('Error in student registration:', error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
}