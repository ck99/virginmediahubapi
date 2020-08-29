let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "port": schemaTools.arrayOf("ConnectedPortInfo"),
  "Device": "1"
});

let name = "wiredstate";
module.exports = {
    name,
    route: name,
    functionNumber: 143,
    tags: ["Configuration"],
    schema,
    normalizers: [
        require('../normalizers').emptyStringElementsToEmptyObjects(["port"])
    ]
}