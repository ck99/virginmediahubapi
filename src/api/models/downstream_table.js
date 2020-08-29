let schemaTools = require('../schema_tools')
let DownStreamInfo = require('../definitions/DownStreamInfo')
let name = "downstream_table";
let schema = schemaTools.fromExample({
        "ds_num": "1"
})

schema.properties.downstream = schemaTools.arrayOf(DownStreamInfo.name)

module.exports = {
        name,
        route: name,
        functionNumber: 10,
        tags: ["WAN"],
        schema
}