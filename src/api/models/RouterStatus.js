let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "DHCP": "Completed",
  "Telephone_Security": "BASIC.1",
  "TFTP": "Completed",
  "Telephone_Registration_Complete": "Pass",
  "Line": schemaTools.arrayOf("PhoneLineStatus")
});

let name = "router_status";
module.exports = {
    name,
    route: name,
    rootElement: "status",
    functionNumber: 500,
    tags: ["Configuration"],
    schema,
}