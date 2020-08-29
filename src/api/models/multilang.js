let schemaTools = require('../schema_tools')

module.exports = {
    name: "multilang",
    route: "multilang",
    functionNumber: 3,
    schema: schemaTools.fromExample({
        "WebCapPor": "0",
        "Lang": "uk"
    })
}