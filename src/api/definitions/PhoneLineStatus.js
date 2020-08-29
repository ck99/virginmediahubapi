let schemaTools = require('../schema_tools')

let name = "PhoneLineStatus";
let schema = schemaTools.fromExample({
    "LineNum": "1",
    "ProvSt": "operational",
    "HookSt": "on_hook",
    "mtastatus": "ready"
})

module.exports = {name, schema}