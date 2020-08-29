let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "fqdn": schemaTools.ref("FQDN"),
  "ipaddr_submask": schemaTools.ref("IPV4AddressWithSubnetMask"),
  "gateway_address": schemaTools.ref("IPV4Address"),
  "config_file": schemaTools.ref("TFTPConfig"),
  "primary_dns": schemaTools.ref("IPV4Address"),
  "secondary_dns": schemaTools.ref("IPV4Address"),
  "lease_time_remaining": "D:6 H:12 M:14 S:27",
  "rebind_time_remaining": "D:5 H:15 M:14 S:27",
  "renew_time_remaining": "D:3 H:0 M:14 S:27",
  "snmp_entity": schemaTools.ref("IPV4Address"),
  "kerberos_realm": "",
  "provisioning_timer": "10"
});

let name = "dhcp";
module.exports = {
    name,
    route: name,
    functionNumber: 501,
    tags: ["LAN"],
    schema,
}