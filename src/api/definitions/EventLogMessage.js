let schemaTools = require('../schema_tools')

module.exports = {
    name: "EventLogMessage",
    schema: schemaTools.fromExample({
        "prior": "notice",
        "text": "Cable Modem Reboot -  due to power reset;CM-MAC=be:ef:fa:ce:ca:fe;CMTS-MAC=00:00:00:00:00:00;CM-QOS=1.1;CM-VER=3.0;",
        "time": "01-01-1970 00:01:16",
        "t": "76"
    })
}