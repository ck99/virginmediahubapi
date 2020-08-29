let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "TunnerTemperature": "77",
  "Temperature": "60",
  "OperState": "OPERATIONAL",
  "wan_ipv4_addr": "",
  "wan_ipv6_addr": schemaTools.arrayOf("WANIPv6AddrEntry"),
});

let name = "cmstate";
module.exports = {
    name,
    route: name,
    functionNumber: 136,
    schema,
    normalizers: [
        require('../normalizers').objectToArray(["wan_ipv6_addr"])
    ]
}