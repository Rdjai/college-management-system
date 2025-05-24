const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    libraryUser: { type: mongoose.Schema.Types.ObjectId, ref: 'LibraryUser', required: true },
    issueDate: { type: Date, default: Date.now },
    dueDate: { type: Date, required: true },
    returnDate: Date,
    finePaid: { type: Number, default: 0 },
    fineCalculated: { type: Number, default: 0 },
    status: {
        type: String,
        enum: ['Issued', 'Returned', 'Overdue'],
        default: 'Issued'
    }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
