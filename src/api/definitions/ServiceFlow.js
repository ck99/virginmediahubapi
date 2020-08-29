let schemaTools = require('../schema_tools')

let name = "ServiceFlow";
let schema = schemaTools.fromExample({
    "Sfid": "999990000",
    "direction": "1",
    "pMaxTrafficRate": "10485760",
    "pMaxTrafficBurst": "16320",
    "pMinReservedRate": "0",
    "pMaxConcatBurst": "1522",
    "pSchedulingType": "1"
})

module.exports = {name, schema}