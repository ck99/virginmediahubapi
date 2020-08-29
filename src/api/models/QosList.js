let schemaTools = require('../schema_tools')

let schema = schemaTools.arrayOf("QOSListEntry");

let name = "QosList";
module.exports = {
    name,
    route: "qos_list",
    functionNumber: 502,
    schema,
    normalizers: [
        response => {
          return response['qos']
        }
    ]
}