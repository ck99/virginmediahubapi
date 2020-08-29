let schemaTools = require('../schema_tools')
let schema = schemaTools.fromExample({
  "NAPT_mode": "1",
  "WanMAC": schemaTools.ref("MACAddress"),
  "wan_ipv6_addr": schemaTools.arrayOf("WANIPv6AddrEntry"),
  "WanDhcpv6Srv": schemaTools.ref("IPV6Address"),
  "ipv6_LeaseTime": "D:7 H:0 M:0 S:0",
  "ipv6_LeaseExpire": "Mon Aug 31 04:50:58 2020",
  "wan_ipv6_dnsaddr": schemaTools.arrayOf("WANIPv6DNSAddrEntry"),
  "WanIP": "",
  "gateway_address": "0.0.0.0",
  "LeaseTime": "None",
  "LeaseExpire": "",
  "wan_ipv4_dnsaddr": "",
  "dslite_enable": "1",
  "dslite_fqdn": schemaTools.ref("FQDN"),
  "dslite_addr": schemaTools.ref("IPV6Address")
});

let name = "WANSetting";
module.exports = {
    name,
    route: "wan_setting",
    functionNumber: 107,
    tags: ["WAN"],
    schema,
    normalizers: [
      require('../normalizers').objectToArray(["wan_ipv6_dnsaddr", "wan_ipv6_addr"])
    ]
}