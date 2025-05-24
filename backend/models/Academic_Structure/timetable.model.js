const mongoose = require('mongoose');

const timeSlotSchema = new mongoose.Schema({
    day: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        required: true
    },
    period: {
        type: Number,
        required: true
    },
    startTime: {
        type: String, // Format: "09:00"
        required: true
    },
    endTime: {
        type: String, // Format: "10:00"
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    faculty: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Faculty',
        required: true
    },
    roomNumber: {
        type: String
    },
    isLab: {
        type: Boolean,
        default: false
    }
});

const timeTableSchema = new mongoose.Schema({
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    section: {
        type: String,
        default: 'A'
    },
    timeSlots: [timeSlotSchema],
    weekStartDate: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('TimeTable', timeTableSchema);
