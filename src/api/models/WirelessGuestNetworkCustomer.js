let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "year": "0",
  "mouth": "0",
  "day": "0",
  "hour": "0",
  "minute": "0",
  "Interface": schemaTools.ref("GuestNetworkInterface2G"),
  "Interface5G": schemaTools.ref("GuestNetworkInterface5G")
});

let name = "WirelessGuestNetworkCustomer";
module.exports = {
    name,
    rootElement: "WirelessGuestNetwork",
    route: "wireless_guest_network_customer",
    functionNumber: 317,
    tags: ["LAN"],
    schema,
}