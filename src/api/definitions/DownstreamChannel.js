let schemaTools = require('../schema_tools')

let name = "DownstreamChannel";
let schema = schemaTools.fromExample({
    "freq": "174000000",
    "mod": "256qam",
    "chid": "1",
    "state": "4",
    "status": "0",
    "primarySettings": "1"
})

module.exports = {name, schema}