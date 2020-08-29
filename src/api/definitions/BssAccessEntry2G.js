let schemaTools = require('../schema_tools')

module.exports = {
    name: "BssAccessEntry2G",
    schema: schemaTools.fromExample({
        "AccessStation": schemaTools.ref("MACAddress"),
        "AccessDeviceName": ""
    })
}