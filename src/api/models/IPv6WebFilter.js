let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "IPv6firewallProtection": "1",
  "IPv6blockIpFragments": "2",
  "IPv6portScanDetection": "2",
  "IPv6synFloodDetection": "1",
  "IPv6IcmpFloodDetection": "1",
  "IPv6IcmpFloodDetectRate": "15"
});

let name = "IPv6WebFilter";
module.exports = {
    name,
    route: "ipv6_web_filter",
    functionNumber: 117,
    tags: ["Security"],
    schema,
}