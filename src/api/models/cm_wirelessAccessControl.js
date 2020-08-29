let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "BandMode": "3",
  "BSSID24G": schemaTools.ref("SSID"),
  "BSSID5G": schemaTools.ref("SSID"),
  "Enable24GMain": "1",
  "Enable5GMain": "1",
  "Mac24G": schemaTools.ref("MACAddress"),
  "Mac5G": schemaTools.ref("MACAddress"),
  "AccessMode24G": "3",
  "AccessMode5G": "3",
  "BssAccessEntry": schemaTools.arrayOf("BssAccessEntry2G"),
  "BssAccessEntry5G": schemaTools.arrayOf("BssAccessEntry5G"),
  "GuestStat24G": schemaTools.arrayOf("GuestStat24G"),
  "GuestStat5G": schemaTools.arrayOf("GuestStat5G"),
});

let name = "cm_wirelessAccessControl";
module.exports = {
    name,
    route: "cm_wireless_access_control",
    functionNumber: 311,
    tags:["Configuration"],
    schema,
}