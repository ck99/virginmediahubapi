let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "Interface": schemaTools.arrayOf("GuestNetworkInterface2G"),
  "Interface5G": schemaTools.arrayOf("GuestNetworkInterface5G"),
});

let name = "WirelessGuestNetworkAll";
module.exports = {
    name,
    rootElement: "WirelessGuestNetwork",
    route: "wireless_guest_network_all",
    functionNumber: 307,
    tags: ["Configuration"],
    schema,
}