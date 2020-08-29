let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "primary24g": "1",
  "primary5g": "1"
});

let name = "wifistate";
module.exports = {
    name,
    route: name,
    functionNumber: 326,
    schema,
}