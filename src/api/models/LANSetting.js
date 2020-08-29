let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "UPnP": "1",
  "LanMAC": schemaTools.ref("MACAddress"),
  "LanIP": schemaTools.ref("IPV4Address"),
  "DMZaddr": schemaTools.ref("IPV4Address"),
  "DMZ": "0",
  "LanIPv6": schemaTools.ref("IPV6Address"),
  "LanIPv6Prefix": schemaTools.ref("IPV6Prefix"),
  "subnetmask": schemaTools.ref("IPV4SubnetMask"),
  "DHCP_startaddress": schemaTools.ref("IPV4Address"),
  "DHCP_endaddress": schemaTools.ref("IPV4Address"),
});

let name = "LANSetting";
module.exports = {
    name,
    route: "lan_setting",
    functionNumber: 100,
    tags: ["LAN"],
    schema,
}