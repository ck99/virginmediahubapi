let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "langSet_support": schemaTools.arrayOf("Language"),
});

let name = "langsetlist";
module.exports = {
    name,
    route: name,
    functionNumber: 21,
    schema,
}