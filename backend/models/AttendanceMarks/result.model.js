const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    examType: {
        type: String,
        enum: ['Midterm', 'Final', 'Quiz', 'Assignment', 'Practical'],
        required: true
    },
    marksObtained: {
        type: Number,
        required: true,
        min: 0
    },
    maximumMarks: {
        type: Number,
        required: true,
        min: 0
    },
    grade: {
        type: String
    },
    remarks: {
        type: String
    },
    examDate: {
        type: Date
    }
}, {
    timestamps: true
});

marksSchema.index({ student: 1, course: 1, semester: 1, examType: 1 }, { unique: true });

module.exports = mongoose.model('Marks', marksSchema);
