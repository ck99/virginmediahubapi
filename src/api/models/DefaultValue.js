let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "loginPwd": schemaTools.ref("AdminPIN"),
  "WiFiSSID": schemaTools.ref("SSID"),
  "WiFikey": schemaTools.ref("PSK"),
});

let name = "DefaultCredentials";
module.exports = {
    name,
    route: "default_credentials",
    rootElement: "DefaultValue",
    functionNumber: 324,
    tags:["Security"],
    schema,
}