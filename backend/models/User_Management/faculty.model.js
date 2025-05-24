const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    employeeId: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    joiningDate: {
        type: Date,
        default: Date.now
    },
    qualifications: [
        {
            degree: String,
            institution: String,
            year: Number
        }
    ],
    subjects: [
        {
            type: String
        }
    ],
    achievements: [
        {
            name: String,
            achmtsDesc: String,
            digitalLink: String
        }
    ],
    profileImageUrl: {
        type: String // Firebase/Cloud storage URL
    },
    documents: [
        {
            name: String,
            url: String
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Faculty', facultySchema);
