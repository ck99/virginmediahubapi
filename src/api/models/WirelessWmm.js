let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "WMM2G": "1",
  "Apsd2G": "2",
  "TransmissionMode2g": "1",
  "WMM5G": "1",
  "Apsd5G": "2",
  "TransmissionMode5g": "14"
});

let name = "WirelessWmm";
module.exports = {
    name,
    route: "wireless_wmm",
    functionNumber: 302,
    tags: ["Configuration"],
    schema,
}