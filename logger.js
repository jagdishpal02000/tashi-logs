const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({format: 'DD-MM-YYYY HH:mm:ss'}),
        winston.format.json(),
    ),
    transports: [new winston.transports.File({ level:'info',filename: 'logs/info.log' })]
});

module.exports = (namespace) => {
    return function logError({line,info,ip}) {
        logger.info(`[${namespace}][${line}][${ip}] : ${info}`);
    }
};


