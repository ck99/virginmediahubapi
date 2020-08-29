let schemaTools = require('../schema_tools')

let name = "firewalllog_table";
module.exports = {
    name,
    route: name,
    functionNumber: 19,
    tags: ["Logging"],
    schema: schemaTools.arrayOf("FirewallLogMessage"),
}