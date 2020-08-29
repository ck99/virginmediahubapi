let schemaTools = require('../schema_tools')
let SignalInfo = require('../definitions/SignalInfo')
let name = "signal_table";
let schema = schemaTools.fromExample({
    "sig_num": "1",
})

schema.properties.signal = schemaTools.arrayOf(SignalInfo.name)

module.exports = {
    name,
    route: name,
    functionNumber: 12,
    tags: ["WAN"],
    schema
}