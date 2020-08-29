let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "Client2G": "",
  "Client5G": ""
});

let name = "WirelessClient";
module.exports = {
    name,
    route: "wireless_client",
    functionNumber: 322,
    tags: ["LAN"],
    schema,
}