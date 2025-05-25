const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    headOfDepartment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Faculty'
    },
    description: {
        type: String
    },
    establishedYear: {
        type: Number
    },
    contactEmail: {
        type: String
    },
    contactPhone: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Department', departmentSchema);
