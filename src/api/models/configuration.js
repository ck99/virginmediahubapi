let schemaTools = require('../schema_tools')

let name = "configuration";
let schema = schemaTools.fromExample({
    "FrequencyPlan": "4",
    "Frequency": "174000000"
})

module.exports = {
    name,
    route: name,
    functionNumber: 6,
    schema
}