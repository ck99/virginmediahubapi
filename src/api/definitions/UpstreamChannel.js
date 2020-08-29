let schemaTools = require('../schema_tools')

let name = "UpstreamChannel";
let schema = schemaTools.fromExample({
    "usid": "2",
    "freq": "32800000",
    "power": "103",
    "srate": "5.120",
    "state": "4"
})

module.exports = {name, schema}