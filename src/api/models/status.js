let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "DHCP": "Completed",
  "Telephone_Security": "BASIC.1",
  "TFTP": "Completed",
  "Telephone_Registration_Complete": "Pass",
  "Line": schemaTools.arrayOf("PhoneLineStatus")
});

let name = "status";
module.exports = {
    name,
    route: name,
    functionNumber: 500,
    schema,
}