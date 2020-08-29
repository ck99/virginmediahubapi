let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "maxInstance": "32",
  "instance": schemaTools.arrayOf("MACFilteringRule"),
  "time_mode": "0",
  "GeneralTime": "",
  "DailyTime": ""
});

let name = "MACFiltering";
module.exports = {
    name,
    route: "mac_filtering",
    functionNumber: 119,
    schema,
    normalizers: [
        require('../normalizers').objectToArray(["instance"])
    ],
}