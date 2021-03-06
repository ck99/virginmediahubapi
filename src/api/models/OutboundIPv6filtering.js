let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "ipv6_prefix": schemaTools.ref("IPV6Address"),
  "instance": schemaTools.arrayOf("IPV6FilteringRule"),
  "time_mode": "0",
  "GeneralTime": "",
  "DailyTime": ""
});

let name = "IPv6filtering";
module.exports = {
    name,
    route: "outbound_ipv6filtering",
    functionNumber: 111,
    tags: ["Security"],
    functionRule: 1,
    schema,
    normalizers: [
        require('../normalizers').objectToArray(["instance"])
    ],
}