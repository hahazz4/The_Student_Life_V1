const mongoose = require('mongoose');
const reminderSchema = new mongoose.Schema({
    activity:{
        type: String,
        lowercase: true,
        required: true
    },

    date: {
        type: String,
        lowercase: true,
        required: true,
    },

    time: {
        type: String,
        lowercase: true,
        required: true,
    },

    category: {
        type: String,
        lowercase: true,
        enum: ['academic', 'financial']
    }
}) 

const Reminder = mongoose.model('Reminder', reminderSchema);
module.exports = Reminder;