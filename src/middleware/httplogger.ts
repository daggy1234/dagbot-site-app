let morgan = require('morgan');
let logger = require('../utils/logger');

logger.stream = {
    write: (message:any) =>
        logger.info(message.substring(0, message.lastIndexOf('\n'))),
}

module.exports = morgan(
    ':method :url :status :response-time ms - :res[content-length]',
    { stream: logger.stream }
)
