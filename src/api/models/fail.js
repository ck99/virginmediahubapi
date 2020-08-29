let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "FailCount": "0"
});

let name = "Fail";
module.exports = {
    name,
    route: "fail",
    functionNumber: 22,
    tags: ["Logging"],
    schema,
}