let schemaTools = require('../schema_tools')

module.exports = {
    name: "BssAccessEntry5G",
    schema: schemaTools.fromExample({
        "AccessStation5G": schemaTools.ref("MACAddress"),
        "AccessDeviceName5G": ""
    })
}