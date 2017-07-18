const mongoose = require('mongoose');

const booksSchema = mongoose.Schema({
    title: String,
    description: String,
    images: String,
    price: Number
});

const Books = mongoose.model('Books', booksSchema);

module.exports = Books;