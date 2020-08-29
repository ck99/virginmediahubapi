let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "ethflaplistFile": "NULL"
});

let name = "ethflaplist";
module.exports = {
    name,
    route: name,
    functionNumber: 147,
    tags: ["LAN"],
    schema,
}