import mongoose from 'mongoose';
const logger = require('../utils/logger')

mongoose.connect(
    process.env.DB_CONNECTION_STATS!,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        logger.info('Connected Connected to Mongo Stats Database')
    }
)

const statdb = mongoose.connection

statdb.on('connected', () => {
    logger.info('Connected to Mongo Stats Database')
})

statdb.on('disconnected', () => {
    logger.info('Db connection has closed to Mongo Stats Database.')
})

module.exports = statdb
