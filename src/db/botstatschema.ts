import  mongoose from 'mongoose';
import * as  db from './Statsdb';

var StatSchema = new mongoose.Schema({
    bot: {
        type: String,
        default: 'dagbot',
    },
    servers: {
        type: Number,
        required: true,
    },
    commands_called: {
        type: Number,
        required: true,
    },
    users: {
        type: Number,
        required: true,
    },
    socket_stats: {
        type: Object,
        required: true,
    },
    command_stats: {
        type: Object,
        required: true,
    },
})

module.exports = mongoose.model('StatSchema', StatSchema)
