import  mongoose from 'mongoose';
let logger = require('../utils/logger');

mongoose.connect(
    process.env.DB_CONNECTION!,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        logger.info('Connected to mongo')
    }
)

const db = mongoose.connection

db.on('connected', () => {
    logger.info('Db connection firm established')
})

db.on('disconnected', () => {
    logger.info('Db connection has closed.')
})

module.exports = db
