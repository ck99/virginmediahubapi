let schemaTools = require('../schema_tools')
module.exports = {
    name: "WANIPv6AddrEntry",
    schema: {
        type: "object",
        properties: {
            wan_ipv6_addr_entry: schemaTools.arrayOf("IPV6Address")
        }
    }
}