let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "Flag": "0",
  "AccessLevel": "1"
});

let name = "login_timer";
module.exports = {
    name,
    route: name,
    functionNumber: 24,
    schema,
}