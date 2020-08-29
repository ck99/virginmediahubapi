let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "firewallProtection": "1",
  "blockIpFragments": "2",
  "portScanDetection": "2",
  "synFloodDetection": "1",
  "IcmpFloodDetection": "1",
  "IcmpFloodDetectRate": "15"
});

let name = "WebFilter";
module.exports = {
    name,
    route: "web_filter",
    functionNumber: 115,
    tags: ["Security"],
    schema,
}