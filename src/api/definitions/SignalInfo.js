let schemaTools = require('../schema_tools')

let name = "SignalInfo";
let schema = schemaTools.fromExample({
    "dsid": "1",
    "unerrored": "655040379",
    "correctable": "48",
    "uncorrectable": "0"
})

module.exports = {name, schema}