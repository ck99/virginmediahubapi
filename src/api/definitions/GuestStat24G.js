let schemaTools = require('../schema_tools')

module.exports = {
    name: "GuestStat24G",
    schema: schemaTools.fromExample({
        "statIndex24G": "2",
        "statEnable24G": "2",
        "statBSSID24G": schemaTools.ref("SSID"),
        "statGuestMac24G": schemaTools.ref("MACAddress"),
        "statGAccessMode24G": "1",
        "GuestBssAccessEntry24G": schemaTools.arrayOf("GuestBssAccessEntry24G")
    })
}