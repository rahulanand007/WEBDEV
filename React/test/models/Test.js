const mongoose = require('mongoose')

const { Schema } = mongoose;

const TestSchema = new Schema({
    first_round:{
        type: Number,
        required: true
    },
    second_round:{
        type: Number,
        required: true
    },
    third_round:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('test', TestSchema)