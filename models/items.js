const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    data: {
        type: [Object],
        required: true
    }
})

module.exports = Item = mongoose.model('item', ItemSchema);