let schemaTools = require('../schema_tools')

let schema = schemaTools.fromExample({
  "enableDHCPv4": "1",
  "Addr_start": schemaTools.ref("IPV4Address"),
  "NumberOfCpes": "245",
  "LeaseTime": "86400",
  "LanIP": schemaTools.ref("IPV4Address"),
  "subnetmask": schemaTools.ref("IPV4SubnetMask"),
  "privNetID": schemaTools.arrayOf("IPV4Address"),
  "ReserveIpadrr": schemaTools.arrayOf("IPAddressReservation")
});

let name = "BasicDHCP";
module.exports = {
    name,
    route: "basic_dhcp",
    functionNumber: 105,
    tags: ["LAN"],
    schema,
    normalizers: [
        response => {
            ["ReserveIpadrr"].forEach(key => {
                if(_.isString(response[key])) {
                    response[key] = [];
                } else if(_.isPlainObject(response[key])) {
                    response[key] = [response[key]];
                }
            })
            return response;
        }
    ]
}