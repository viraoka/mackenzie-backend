const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    phone: {
        type: Number,
        require: true
        },
    message: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Form', formSchema);