let schemaTools = require('../schema_tools')

module.exports = {
    name: "GuestBssAccessEntry24G",
    schema: schemaTools.fromExample({
        "GuestAccessStation24G": schemaTools.ref("MACAddress")
    })
}