const Faculty = require('../../models/User_Management/faculty.model');

async function generateEmpid() {
    const currentYear = new Date().getFullYear();
    const lastFaculty = await Faculty.findOne({ employeeId: new RegExp(`LNC${currentYear}`) }).sort({ createdAt: -1 });
    let sequence = 1;
    if (lastFaculty) {
        const lastId = lastFaculty.employeeId;
        const lastseq = parseInt(lastId.substring(7));
        sequence = lastseq + 1;
    }
    const newEmployeeId = `LNC${currentYear}${sequence.toString().padStart(3, '0')}`
    return newEmployeeId;
}

const createFaculty = async (req, res) => {
    try {
        const {
            name,
            gender,
            dateOfBirth,
            email,
            phone,
            address,
            department,
            designation,
            joiningDate,
            qualifications,
            subjects,
            achievements,
            profileImageUrl,
            documents
        } = req.body;
        const employeeId = await generateEmpid()
        if (!name || !employeeId || !gender || !dateOfBirth || !email || !phone || !department || !designation) {
            return res.status(400).json({ message: "Please fill all required fields." });
        }

        const existingFaculty = await Faculty.findOne({
            $or: [{ email }, { employeeId }]
        });

        if (existingFaculty) {
            return res.status(409).json({ message: "Email or Employee ID already exists." });
        }

        const newFaculty = new Faculty({
            name,
            employeeId,
            gender,
            dateOfBirth,
            email,
            phone,
            address,
            department,
            designation,
            joiningDate,
            qualifications,
            subjects,
            achievements,
            profileImageUrl,
            documents
        });

        await newFaculty.save();

        res.status(201).json({ message: "Faculty registered successfully", faculty: newFaculty });
    } catch (error) {
        console.error("Error registering faculty:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

module.exports = { createFaculty };
