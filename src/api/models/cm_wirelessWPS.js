let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "WPS_stat": "down",
  "WPS_result": ""
});

let name = "cm_wirelessWPS";
module.exports = {
    name,
    route: "cm_wireless_wps",
    functionNumber: 323,
    tags:["Configuration"],
    schema,
}