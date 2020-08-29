let schemaTools = require('../schema_tools')
module.exports = {
    name: "IPAddressReservation",
    schema: schemaTools.fromExample({
        "MacAddress": schemaTools.ref("MACAddress"),
        "LeasedIP": schemaTools.ref("IPV4Address")
    })
}