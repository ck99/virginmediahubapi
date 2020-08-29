let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "AllowDHCPv6Setting": "1",
  "ipv6RAManagedflag": "0",
  "ipv6_saddr": schemaTools.ref("IPV6Address"),
  "ipv6_prefix": schemaTools.ref("IPV6Prefix"),
  "NumberOfAddr": "512",
  "ipv6PrefixPreferredLifeTime": "604800",
  "ipv6PrefixValidLifeTime": "1209600",
  "dhcpV6AddrLifeTime": "0",
  "ipv6RALifetime": "1800",
  "ipv6RAIntervaltime": "180"
});

let name = "DHCPv6Info";
module.exports = {
    name,
    route: "dhcpv6_info",
    functionNumber: 103,
    schema,
}