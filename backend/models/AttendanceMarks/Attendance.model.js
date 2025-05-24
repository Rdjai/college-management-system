const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
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
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Present', 'Absent', 'Leave', 'Late'],
        required: true
    },
    lectureNumber: {
        type: Number,
        required: true
    },
    faculty: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Faculty',
        required: true
    },
    remarks: {
        type: String
    }
}, {
    timestamps: true
});

attendanceSchema.index({ student: 1, course: 1, date: 1, lectureNumber: 1 }, { unique: true });

module.exports = mongoose.model('Attendance', attendanceSchema);
