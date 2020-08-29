let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "loginPwd": schemaTools.ref("AdminPIN"),
  "WiFiSSID": schemaTools.ref("SSID"),
  "WiFikey": schemaTools.ref("PSK"),
});

let name = "DefaultValue";
module.exports = {
    name,
    route: "default_value",
    functionNumber: 324,
    schema,
}