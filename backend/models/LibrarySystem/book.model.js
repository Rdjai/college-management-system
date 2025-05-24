const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    isbn: { type: String, unique: true, required: true },
    publisher: String,
    year: Number,
    copiesAvailable: { type: Number, default: 1, min: 0 },
    totalCopies: { type: Number, default: 1, min: 0 },
    categories: [String],  // e.g., ["Science", "Mathematics"]
    shelfLocation: String,
    description: String,
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
