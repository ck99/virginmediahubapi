let schemaTools = require('../schema_tools')

module.exports = {
    name: "eventlog_table",
    route: "eventlog_table",
    functionNumber: 13,
    tags: ["Logging"],
    schema: schemaTools.arrayOf("EventLogMessage"),
    normalizers: [
        response => {
            return response['eventlog']
        }
    ]
}