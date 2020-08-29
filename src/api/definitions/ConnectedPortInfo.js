let schemaTools = require('../schema_tools')
module.exports = {
    name: "ConnectedPortInfo",
    schema: schemaTools.fromExample({
        "Eth": "3",
        "Speed": "1000",
    })
}