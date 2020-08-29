let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "isWirelessResetting": "0"
});

let name = "WirelessResetting";
module.exports = {
    name,
    route: "wireless_resetting",
    functionNumber: 328,
    tags: ["Internal"],
    schema,
}