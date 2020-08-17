import {createLogger, transports, format} from 'winston';

let logger = createLogger({
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
        format.printf(
            (info) => `${info.timestamp} ${info.level}: ${info.message}`
        )
    ),
    transports: [
        new transports.File({
            filename: 'all-logs.log',
            maxsize: 5242880,
            maxFiles: 5,
        }),
        new transports.Console(),
    ],
})

module.exports = logger
