let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "LanIP": schemaTools.ref("IPV4Address")
});

let name = "Forwarding";
module.exports = {
    name,
    route: "forwarding",
    functionNumber: 121,
    schema,
}