let schemaTools = require('../schema_tools')

module.exports = {
    name: "GuestStat5G",
    schema: schemaTools.fromExample({
        "statIndex5G": "1",
        "statEnable5G": "2",
        "statBSSID5G": schemaTools.ref("SSID"),
        "statGuestMac5G": schemaTools.ref("MACAddress"),
        "statGAccessMode5G": "1"
    }),
}