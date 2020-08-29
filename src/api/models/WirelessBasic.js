let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "Bandmode": "3",
  "BssEnable2g": "1",
  "BssEnable5g": "1",
  "WiFi_chip_status": "2",
  "cm_status": "Online"
});

let name = "WirelessBasic";
module.exports = {
    name,
    route: "wireless_basic",
    functionNumber: 315,
    schema,
}