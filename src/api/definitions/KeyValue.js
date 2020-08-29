let schemaTools = require('../schema_tools')

module.exports = {
    name: "KeyValue",
    schema: schemaTools.fromExample({
        "key": ".1.3.6.1.4.1.7432.2.1.1.15.0",
        "value": "24",
    })
}