let schemaTools = require('../schema_tools')

let schema = schemaTools.arrayOf("MtaEventLogEntry")
let name = "MtaEventLogs";
module.exports = {
    name,
    route: "mta_event_logs",
    functionNumber: 503,
    tags: ["Logging"],
    schema,
    normalizers: [
      response => {
        return response['MtaEventLog']
      }
    ]
}