const fs = require('fs');
const winston = require('winston');

const logDir = './server/logs';

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      name: 'error-file',
      filename: `${logDir}/exceptions.log`,
      level: 'error',
      json: false
    }),

    new winston.transports.File({
      name: 'info-file',
      filename: `${logDir}/infos.log`,
      level: 'info',
      json: false
    })
  ],
  exitOnError: false
});

module.exports = logger;

module.exports.stream = {
  write: function(message) {
    logger.info(message);
    console.log('message = ', message);
  }
};
