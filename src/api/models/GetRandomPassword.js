let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "PreSharedKey": schemaTools.ref("PSK")
});

let name = "GetRandomPassword";
module.exports = {
    name,
    rootElement: "GstRandomPassword",
    route: "get_random_password",
    tags: ["Internal"],
    description: "Generate a random password",
    functionNumber: 325,
    schema,
}