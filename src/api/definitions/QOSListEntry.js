let schemaTools = require('../schema_tools')

module.exports = {
    name: "QOSListEntry",
    schema: schemaTools.fromExample({
        "sfid": "999999991",
        "name": "EmptyString",
        "direction": "upstream",
        "primary": "yes",
        "packets": "5167002"
    })
}