const mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    detail: {
        type: String,
        required: true,
    },
}, { timestamps: true })

authorSchema.virtual('published', {
    ref: 'book',
    localField: '_id',
    foreignField: 'category'
})
authorSchema.set('toObject', { virtuals: true })
authorSchema.set('toJSON', { virtuals: true })
module.exports = new mongoose.model('category', categorySchema)