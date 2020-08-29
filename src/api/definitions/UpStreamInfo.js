let schemaTools = require('../schema_tools')

let name = "UpStreamInfo";
let schema = schemaTools.fromExample({
    "usid": "1",
    "freq": "39400000",
    "power": "42",
    "srate": "5.120",
    "mod": "64qam",
    "ustype": "3",
    "t1Timeouts": "0",
    "t2Timeouts": "0",
    "t3Timeouts": "1",
    "t4Timeouts": "0",
    "channeltype": "ATDMA",
    "messageType": "29"
})

module.exports = {name, schema}