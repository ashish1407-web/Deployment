const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const newBook = new mongoose.Schema({
    BookTitle: {
        type: String,
        require: true,
        trim: true
    },
    BookAuthor: {
        type: String,
        require: true,
        trim: true
    },
    BookDesc: {
        type: ObjectId,
        ref: 'userbooks',
        require: true
    },
    BookIntro: {
        type: String,
        unique: true,
        require: true,
        trim: true
    },
    BookImgUrl: {
        type: String,
        require: true,
        trim: true
    },
    BookPrice: {
        type: Number,
        require: true,
        trim: true
    },
    BookPublishYear: {
        type: Date,
        require: true
    },
    createdAt:{
        type:Date
    },
    deletedAt: {
        type: Date
    }
})
module.exports = mongoose.model('book', newBook)


