let schemaTools = require('../schema_tools')

let name = "WiFiStatus";
let schema = schemaTools.fromExample({
    "cm_status": "OPERATIONAL",
    "Bandmode": "3",
    "WiFiDefalutKey2g": schemaTools.ref("PSK"),
    "BssEnable2g": "1",
    "SSID2G": schemaTools.ref("SSID"),
    "PreSharedKey2gLength": "12",
    "WiFiDefalutKey5g": schemaTools.ref("PSK"),
    "BssEnable5g": "1",
    "SSID5G": schemaTools.ref("SSID"),
    "PreSharedKey5gLength": "12",
    "LanUserCount": "1"
})

module.exports = {
    name,
    rootElement: "status",
    route: "wifi_status",
    functionNumber: 5,
    schema
}