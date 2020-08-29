let schemaTools = require('../schema_tools')

module.exports = {
    name: "GuestNetworkInterface5G",
    schema: schemaTools.fromExample({
        "Enable5G": "2",
        "BSSID5G": schemaTools.ref("SSID"),
        "GuestMac5G": schemaTools.ref("MACAddress"),
        "HideNetwork5G": "2",
        "SecurityMode5g": "0",
        "PreSharedKey5g": schemaTools.ref("PSK"),
        "GroupRekeyInterval5g": "0",
        "WpaAlgorithm5G": "3"
    })
}