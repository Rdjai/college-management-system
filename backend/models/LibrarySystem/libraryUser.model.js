const mongoose = require('mongoose');

const libraryUserSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'userModel'  // supports Student or Faculty model
    },
    userModel: {
        type: String,
        required: true,
        enum: ['Student', 'Faculty']
    },
    issuedBooksCount: { type: Number, default: 0 },
    maxBooksAllowed: { type: Number, default: 5 },
    fineDue: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('LibraryUser', libraryUserSchema);
