let schemaTools = require('../schema_tools')
module.exports = {
    name: "ConnectedClientInfo",
    schema: {
        type: "object",
        properties: {
            clientinfo: schemaTools.fromExample({
                "interface": "Ethernet 3",
                "IPv4Addr": schemaTools.ref("IPV4AddressWithSubnet"),
                "index": "0",
                "interfaceid": "2",
                "hostname": "mydevice",
                "MACAddr": schemaTools.ref("MACAddress"),
                "method": "1",
                "leaseTime": "00:17:35:31",
                "speed": "1000"
            })
        }
    }
}