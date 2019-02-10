const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Recipe = new Schema({
    name: String,
    required: true,
    
});