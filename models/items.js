const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    data: {
        type: [Object],
        required: true
    },
    token: {
        type: String,
        required: true
    }
})

module.exports = Item = mongoose.model('item', ItemSchema);