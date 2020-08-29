let schemaTools = require('../schema_tools')

module.exports = {
    name: "cm_system_info",
    route: "cm_system_info",
    functionNumber: 2,
    tags:["Configuration"],
    schema: schemaTools.fromExample({
        "cm_docsis_mode": "DOCSIS 3.0",
        "cm_hardware_version": "5.01",
        "cm_mac_addr": schemaTools.ref("MACAddress"),
        "cm_serial_number": "XXXX12345X1X",
        "cm_system_uptime": "0day(s)5h:26m:41s",
        "cm_network_access": "Allowed"
    })
}