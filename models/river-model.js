const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const riverSchema = new Schema({
    name: String,
    quantity: String,
    tou: String
});

const River = mongoose.model('river1', riverSchema);

module.exports = River;
