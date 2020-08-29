let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "LanIP": schemaTools.ref("IPV4Address"),
  "time_mode": "0",
  "GeneralTime": "",
  "DailyTime": ""
});

let name = "IPfiltering";
module.exports = {
    name,
    route: "ipfiltering",
    functionNumber: 109,
    schema,
}