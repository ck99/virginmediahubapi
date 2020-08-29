let schemaTools = require('../schema_tools')

module.exports = {
    name: "GuestNetworkInterface2G",
    schema: schemaTools.fromExample({
        "Enable2G": "1",
        "BSSID2G": schemaTools.ref("SSID"),
        "GuestMac2G": schemaTools.ref("MACAddress"),
        "HideNetwork2G": "2",
        "SecurityMode2g": "6",
        "PreSharedKey2g": schemaTools.ref("PSK"),
        "GroupRekeyInterval2g": "0",
        "WpaAlgorithm2G": "3"
    })
}