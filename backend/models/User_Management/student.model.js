const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    enrollmentNumber: {
        type: String,
        required: true,
        unique: true,
    },
    rollNumber: {
        type: String,
        unique: true,
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
    semester: {
        type: Number,
        min: 1,
        max: 8,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    admissionDate: {
        type: Date,
        default: Date.now
    },
    profileImageUrl: {
        type: String
    },
    documents: [
        {
            name: String,
            url: String
        }
    ],
    marks: [
        {
            subject: { type: String },
            score: { type: Number }
        }
    ],
    attendance: [
        {
            date: Date,
            status: {
                type: String,
                enum: ['Present', 'Absent', 'Leave']
            }
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);
