const { createLogger, format, transports, config } = require('winston');
const appconfig = require('./config');
const remoteLogger = createLogger({
    levels: config.syslog.levels,
    transports: [
        new transports.Console({
            level: appconfig.debug ? 'debug' : 'info',
            format: format.combine(
                format.colorize(),
                format.simple()
            )
        })
    ]
});
const localLogger = createLogger({
    levels: config.syslog.levels,
    transports: [
        new transports.Console({
            level: appconfig.debug ? 'debug' : 'info',
            format: format.combine(
                format.colorize(),
                format.simple()
            )
        })
    ]
});

module.exports = {
    remoteLogger: remoteLogger,
    localLogger: localLogger
};