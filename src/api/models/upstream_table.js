let schemaTools = require('../schema_tools')
let UpStreamInfo = require('../definitions/UpStreamInfo')
let name = "upstream_table";
let schema = schemaTools.fromExample({
    "us_num": "1"
})

schema.properties.upstream = schemaTools.arrayOf(UpStreamInfo.name)

module.exports = {
    name,
    route: name,
    functionNumber: 11,
    schema
}