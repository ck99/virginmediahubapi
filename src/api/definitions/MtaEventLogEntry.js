let schemaTools = require('../schema_tools')

module.exports = {
    name: "MtaEventLogEntry",
    schema: schemaTools.fromExample({
        "timestamp": "2020-08-24 04:51:01",
        "priority": "warning",
        "code": "4000951600",
        "message": "DHCP ERROR: OFFER;SELECTING;Error in option 122 ",
        "EndpointName": ""
    })
}