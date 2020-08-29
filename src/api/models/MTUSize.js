let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "size": "1500"
});

let name = "MTUSize";
module.exports = {
    name,
    route: "mtu_size",
    functionNumber: 134,
    tags: ["Configuration"],
    schema,
}