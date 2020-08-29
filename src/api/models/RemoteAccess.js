let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "Status": "0",
  "Port": "8080",
  "PwdChange": "1"
});

let name = "RemoteAccess";
module.exports = {
    name,
    route: "remote_access",
    functionNumber: 131,
    schema,
}