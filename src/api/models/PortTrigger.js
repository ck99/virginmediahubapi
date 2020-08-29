let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample("");

let name = "PortTrigger";
module.exports = {
    name,
    route: "port_trigger",
    functionNumber: 113,
    tags: ["Security"],
    schema,
}