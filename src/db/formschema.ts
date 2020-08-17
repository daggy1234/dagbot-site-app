import mongoose from 'mongoose';
import * as db from './formdb';

var formSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    feedback: {
        type: String,
    },
    updates: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Form', formSchema)
