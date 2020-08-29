let schemaTools = require('../schema_tools')

module.exports = {
    name: "MACFilteringRule",
    schema: schemaTools.fromExample({
        "id": "1",
        "mac_addr": schemaTools.ref("MACAddress"),
        "enable": "1",
        "hostname": "hostname"
    })
}